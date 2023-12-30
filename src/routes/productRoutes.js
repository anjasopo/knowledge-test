// src/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");

// Rute untuk mendapatkan semua produk
router.get("/", productController.getAllProducts);

// Rute untuk mendapatkan produk berdasarkan ID
router.get("/:id", productController.getProductById);

// Rute yang memerlukan otentikasi untuk membuat produk baru
router.post("/", authMiddleware.verifyToken, productController.createProduct);

// Rute yang memerlukan otentikasi untuk memperbarui produk berdasarkan ID
router.put("/:id", authMiddleware.verifyToken, productController.updateProduct);

// Rute yang memerlukan otentikasi untuk menghapus produk berdasarkan ID
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  productController.deleteProduct
);

module.exports = router;
