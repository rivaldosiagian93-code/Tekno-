const { promisify } = require("node:util");
const {
    createHash,
    randomBytes,
    scrypt: scryptCallback,
    timingSafeEqual
} = require("node:crypto");
const { Pool } = require("pg");

const scrypt = promisify(scryptCallback);

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL wajib diatur untuk menghubungkan database PostgreSQL.");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.on("error", error => {
    console.error("Koneksi database PostgreSQL mengalami kesalahan.", error);
});

async function initializeDatabase() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id BIGSERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            business TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            password_salt TEXT NOT NULL,
            role TEXT NOT NULL CHECK (role IN ('buyer', 'supplier')),
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `);
    await pool.query(`
        CREATE TABLE IF NOT EXISTS sessions (
            token_hash TEXT PRIMARY KEY,
            user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            expires_at TIMESTAMPTZ NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `);
    await pool.query("CREATE INDEX IF NOT EXISTS sessions_expires_at_idx ON sessions (expires_at)");
}

function publicUser(row) {
    return {
        id: String(row.id),
        name: row.name,
        business: row.business,
        phone: row.phone,
        email: row.email,
        role: row.role
    };
}

async function createUser({ name, business, phone, email, password, role }) {
    const salt = randomBytes(16);
    const passwordHash = await scrypt(password, salt, 64);
    const result = await pool.query(
        `INSERT INTO users (name, business, phone, email, password_hash, password_salt, role)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id, name, business, phone, email, role`,
        [name, business, phone, email, passwordHash.toString("hex"), salt.toString("hex"), role]
    );
    return publicUser(result.rows[0]);
}

async function verifyUser(email, password) {
    const result = await pool.query(
        "SELECT id, name, business, phone, email, role, password_hash, password_salt FROM users WHERE email = $1",
        [email]
    );
    const row = result.rows[0];
    if (!row) return null;

    const salt = Buffer.from(row.password_salt, "hex");
    const expectedHash = Buffer.from(row.password_hash, "hex");
    const actualHash = await scrypt(password, salt, expectedHash.length);
    if (actualHash.length !== expectedHash.length || !timingSafeEqual(actualHash, expectedHash)) return null;
    return publicUser(row);
}

const hashToken = token => createHash("sha256").update(token).digest("hex");

async function createSession(userId) {
    const token = randomBytes(32).toString("hex");
    await pool.query("DELETE FROM sessions WHERE expires_at <= NOW()");
    await pool.query(
        "INSERT INTO sessions (token_hash, user_id, expires_at) VALUES ($1, $2, NOW() + INTERVAL '7 days')",
        [hashToken(token), userId]
    );
    return token;
}

async function findSession(token) {
    if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
    const result = await pool.query(
        `SELECT users.id, users.name, users.business, users.phone, users.email, users.role
         FROM sessions JOIN users ON users.id = sessions.user_id
         WHERE sessions.token_hash = $1 AND sessions.expires_at > NOW()`,
        [hashToken(token)]
    );
    return result.rows[0] ? publicUser(result.rows[0]) : null;
}

async function deleteSession(token) {
    if (!token || !/^[a-f0-9]{64}$/.test(token)) return;
    await pool.query("DELETE FROM sessions WHERE token_hash = $1", [hashToken(token)]);
}

module.exports = {
    pool,
    initializeDatabase,
    createUser,
    verifyUser,
    createSession,
    findSession,
    deleteSession
};
