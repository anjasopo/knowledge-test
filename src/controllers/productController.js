// src/controllers/productController.js
const productService = require("../services/productService");

const productController = {
  // Mendapatkan semua produk
  getAllProducts: async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Mendapatkan produk berdasarkan ID
  getProductById: async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await productService.getProductById(productId);
      res.json(product);
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ error: "Product not found" });
    }
  },

  // Membuat produk baru
  createProduct: async (req, res) => {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .json({ error: `Internal Server Error: ${error.message}` });
    }
  },

  // Memperbarui produk berdasarkan ID
  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedProduct = await productService.updateProduct(
        productId,
        req.body
      );
      res.json(updatedProduct);
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ error: "Product not found" });
    }
  },

  // Menghapus produk berdasarkan ID
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await productService.deleteProduct(productId);
      res.json(deletedProduct);
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ error: "Product not found" });
    }
  },
};

module.exports = productController;
