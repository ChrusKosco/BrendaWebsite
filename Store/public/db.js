// db.js
const Database = require('better-sqlite3');
const db = new Database('data.sqlite');

function ensureTables() {
    db.prepare(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      price INTEGER NOT NULL,
      image TEXT,
      stock INTEGER DEFAULT 0
    )
  `).run();

    db.prepare(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      stripe_session_id TEXT,
      status TEXT,
      total INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      payload TEXT
    )
  `).run();
}

module.exports = { db, ensureTables };
