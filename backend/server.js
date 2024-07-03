// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("MONGO_URI not found in environment variables");
  process.exit(1); // Exit the process with failure
} else {
  console.log("MONGO_URI:", mongoURI);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    console.error("Error details:", err.message);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
