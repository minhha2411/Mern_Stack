const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.port || 3000;

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
