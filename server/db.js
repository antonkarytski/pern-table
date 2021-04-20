const { Client: Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;

//console.log(process.env.DATABASE_URL);
const pool = new Pool({ connectionString });

try {
  pool.connect();
} catch (e) {
  console.log(e);
}

module.exports = pool;
