const express = require("express");
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to your Express server.");
});

// Sample route for an API endpoint
app.get("/api/data", (req, res) => {
  res.json({
    message: "This is a sample API response.",
    data: [1, 2, 3, 4, 5],
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
