// backend/routes/userRoutes.js
const express = require("express");
const {
  register,
  login,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getUserProfile);

module.exports = router;
