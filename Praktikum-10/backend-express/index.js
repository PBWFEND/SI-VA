require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Test root
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API routes
app.use("/api", router);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
