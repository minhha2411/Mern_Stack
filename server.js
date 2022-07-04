const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.port || 3000;

// Connect to DB
connectDB();

// Define Routes

app.use("/api/users", require("./routers/api/users"));
app.use("/api/posts", require("./routers/api/posts"));
app.use("/api/profile", require("./routers/api/profile"));
app.use("/api/auth", require("./routers/api/auth"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
