const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Rute untuk pendaftaran pengguna baru
router.post("/register", authController.register);

// Rute untuk login
router.post("/login", authController.login);

// Rute yang memerlukan otentikasi untuk mendapatkan profil pengguna
router.get(
  "/profile",
  authMiddleware.verifyToken,
  authController.getUserProfile
);

module.exports = router;
