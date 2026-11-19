const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT) || 8000;
const clientPath = path.join(__dirname, "app.js");

const server = http.createServer((request, response) => {
    if (request.method !== "GET" && request.method !== "HEAD") {
        response.writeHead(405, { Allow: "GET, HEAD" });
        response.end("Method not allowed");
        return;
    }

    const pathname = new URL(request.url, `http://${host}`).pathname;
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

server.listen(port, host, () => {
    console.log(`AgriMatch tersedia di http://${host}:${port}`);
});

server.on("error", error => {
    console.error("Server tidak dapat dijalankan.", error);
    process.exitCode = 1;
});
