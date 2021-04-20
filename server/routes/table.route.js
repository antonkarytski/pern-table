const { Router } = require("express");
const router = Router();
const pool = require("../db");

router.get("/allrecords", async (req, res) => {
  const allRecords = await pool.query(
    'SELECT * FROM "public"."pern_table" LIMIT 100'
  );
  res.json(allRecords.rows);
});
