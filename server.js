const express = require("express");
const path = require("path");

// Import Routes
const statusRoute = require("./routes/status");

// Create Express App
const app = express();

// Server Port
const PORT = process.env.PORT || 3000;

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/status", statusRoute);

// Start Server
app.listen(PORT, () => {
    console.log("=================================");
    console.log("🚀 Cloud Server Status Dashboard");
    console.log(`🌐 Server running on http://localhost:${PORT}`);
    console.log("=================================");
});