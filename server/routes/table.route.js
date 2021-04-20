const { Router } = require("express");
const router = Router();
const pool = require("../db");

router.get("/allrecords", async (req, res) => {
  console.log("start");
  try{
    const allRecords = await pool.query(
      'SELECT * FROM "public"."pern_table" LIMIT 100'
    );
    console.log(allRecords.rows);
    res.json(allRecords.rows);
  } catch (e) {
    console.log(e)
  }
});

module.exports = router;
