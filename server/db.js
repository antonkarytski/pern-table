const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL2;
const pool = new Pool({ connectionString });

module.exports = pool;
