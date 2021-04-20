require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/data", require("./routes/table.routes"));

const PORT = process.env.PORT || 5000;
try {
  app.listen(PORT, () => console.log(`App started ${PORT}`));
} catch (e) {
  console.log("Server Error", e.message);
  process.exit(1);
}
