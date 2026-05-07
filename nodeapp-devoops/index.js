const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Hello from Node.js + Express Demo App 🚀");
});

// Health Route
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});