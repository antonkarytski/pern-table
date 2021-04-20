const { Router } = require("express");
const router = Router();
const pool = require("../db");

router.get("/allrecords", async (req, res) => {
  try {
    const allRecords = await pool.query(
      'SELECT * FROM "public"."pern_table" LIMIT 1000'
    );
    res.json(allRecords.rows);
  } catch (e) {}
});

module.exports = router;
