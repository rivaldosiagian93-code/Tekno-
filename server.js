const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const {
    pool,
    initializeDatabase,
    createUser,
    verifyUser,
    createSession,
    findSession,
    deleteSession
} = require("./database");

const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 8000;
const clientPath = path.join(__dirname, "app.js");
const isProduction = process.env.NODE_ENV === "production";

class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

function sendJson(response, status, value, headers = {}) {
    response.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        ...headers
    });
    response.end(JSON.stringify(value));
}

function sessionCookie(token, maxAge = 604800) {
    return `agrimatch_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${isProduction ? "; Secure" : ""}`;
}

function getSessionToken(request) {
    const cookieHeader = request.headers.cookie || "";
    const match = cookieHeader.match(/(?:^|;\s*)agrimatch_session=([a-f0-9]{64})(?:;|$)/);
    return match ? match[1] : null;
}

async function readJsonBody(request) {
    if (!String(request.headers["content-type"] || "").toLowerCase().startsWith("application/json")) {
        throw new HttpError(415, "Permintaan harus menggunakan format JSON.");
    }
    let body = "";
    for await (const chunk of request) {
        body += chunk;
        if (Buffer.byteLength(body) > 16_384) throw new HttpError(413, "Data permintaan terlalu besar.");
    }
    try {
        const parsed = JSON.parse(body);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Object JSON diperlukan.");
        return parsed;
    } catch {
        throw new HttpError(400, "Format data permintaan tidak valid.");
    }
}

function requiredText(value, label, maxLength) {
    if (typeof value !== "string") throw new HttpError(400, `${label} wajib diisi.`);
    const normalized = value.trim();
    if (!normalized || normalized.length > maxLength) throw new HttpError(400, `${label} wajib diisi dan maksimal ${maxLength} karakter.`);
    return normalized;
}

async function handleApi(request, response, pathname) {
    if (!pathname.startsWith("/api/")) return false;

    try {
        if (pathname === "/api/me" && request.method === "GET") {
            const user = await findSession(getSessionToken(request));
            sendJson(response, 200, { user }, user ? {} : { "Set-Cookie": sessionCookie("", 0) });
            return true;
        }

        if (pathname === "/api/register" && request.method === "POST") {
            const body = await readJsonBody(request);
            const name = requiredText(body.name, "Nama", 100);
            const business = requiredText(body.business, "Nama usaha", 120);
            const phone = requiredText(body.phone, "Nomor WhatsApp", 30);
            const email = requiredText(body.email, "Email", 254).toLowerCase();
            const password = body.password;
            const role = body.role;
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new HttpError(400, "Format email tidak valid.");
            if (typeof password !== "string" || password.length < 8 || Buffer.byteLength(password) > 128) {
                throw new HttpError(400, "Kata sandi harus memiliki 8–128 byte.");
            }
            if (role !== "buyer" && role !== "supplier") throw new HttpError(400, "Peran akun tidak valid.");

            try {
                const user = await createUser({ name, business, phone, email, password, role });
                const token = await createSession(user.id);
                sendJson(response, 201, { user }, { "Set-Cookie": sessionCookie(token) });
            } catch (error) {
                if (error.code === "23505") throw new HttpError(409, "Email tersebut sudah terdaftar.");
                throw error;
            }
            return true;
        }

        if (pathname === "/api/login" && request.method === "POST") {
            const body = await readJsonBody(request);
            const email = requiredText(body.email, "Email", 254).toLowerCase();
            if (typeof body.password !== "string" || !body.password || Buffer.byteLength(body.password) > 128) {
                throw new HttpError(400, "Email atau kata sandi tidak valid.");
            }
            const user = await verifyUser(email, body.password);
            if (!user) throw new HttpError(401, "Email atau kata sandi salah.");
            const token = await createSession(user.id);
            sendJson(response, 200, { user }, { "Set-Cookie": sessionCookie(token) });
            return true;
        }

        if (pathname === "/api/logout" && request.method === "POST") {
            await deleteSession(getSessionToken(request));
            sendJson(response, 200, { ok: true }, { "Set-Cookie": sessionCookie("", 0) });
            return true;
        }

        if (["/api/me", "/api/register", "/api/login", "/api/logout"].includes(pathname)) {
            sendJson(response, 405, { error: "Metode tidak diizinkan." }, { Allow: pathname === "/api/me" ? "GET" : "POST" });
            return true;
        }
        sendJson(response, 404, { error: "Endpoint tidak ditemukan." });
    } catch (error) {
        if (error instanceof HttpError) {
            sendJson(response, error.status, { error: error.message });
            return true;
        }
        console.error("Permintaan API gagal.", error);
        sendJson(response, 500, { error: "Terjadi kesalahan server. Silakan coba lagi." });
    }
    return true;
}

const server = http.createServer(async (request, response) => {
    const pathname = new URL(request.url, `http://${host}`).pathname;
    if (await handleApi(request, response, pathname)) return;

    if (request.method !== "GET" && request.method !== "HEAD") {
        response.writeHead(405, { Allow: "GET, HEAD" });
        response.end("Method not allowed");
        return;
    }

    if (pathname === "/healthz") {
        try {
            await pool.query("SELECT 1");
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            response.end(request.method === "HEAD" ? undefined : "ok");
        } catch (error) {
            console.error("Pemeriksaan database gagal.", error);
            response.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
            response.end(request.method === "HEAD" ? undefined : "database unavailable");
        }
        return;
    }

    if (pathname === "/app.js") {
        fs.readFile(clientPath, (error, contents) => {
            if (error) {
                console.error("Tidak dapat membaca app.js.", error);
                response.writeHead(500);
                response.end("Aplikasi tidak dapat dimuat.");
                return;
            }
            response.writeHead(200, {
                "Content-Type": "text/javascript; charset=utf-8",
                "Cache-Control": "no-store"
            });
            response.end(request.method === "HEAD" ? undefined : contents);
        });
        return;
    }

    if (pathname === "/" || pathname === "/index") {
        const document = `<!doctype html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#174c35">
    <title>AgriMatch — Hasil panen lokal, lebih mudah ditemukan</title>
    <script src="/app.js" defer></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>`;
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store"
        });
        response.end(request.method === "HEAD" ? undefined : document);
        return;
    }

    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Halaman tidak ditemukan.");
});

initializeDatabase().then(() => {
    server.listen(port, host, () => {
        console.log(`AgriMatch tersedia di http://${host}:${port}`);
    });
}).catch(error => {
    console.error("Database AgriMatch tidak dapat disiapkan.", error);
    process.exit(1);
});

server.on("error", error => {
    console.error("Server tidak dapat dijalankan.", error);
    process.exitCode = 1;
});
