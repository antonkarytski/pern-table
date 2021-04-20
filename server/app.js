const express = require("express");
require("dotenv").config();
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    app.listen(PORT, () => console.log(`App started ${PORT}`));
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
