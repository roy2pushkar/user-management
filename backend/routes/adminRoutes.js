// backend/routes/adminRoutes.js
const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/adminController");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .post(protect, admin, createUser)
  .get(protect, admin, getAllUsers);

router
  .route("/:id")
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

module.exports = router;
