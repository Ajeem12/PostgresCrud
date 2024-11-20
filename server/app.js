const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

// Catch-all route for unknown endpoints
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Catch-all route for unknown endpoints
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
