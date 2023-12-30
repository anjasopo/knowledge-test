const Product = require("../models/Product");

const productService = {
  // Mengambil semua produk dari database
  getAllProducts: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error(`Error getting products: ${error.message}`);
    }
  },

  // Mengambil produk berdasarkan ID
  getProductById: async (productId) => {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error("Produk tidak ditemukan");
      }
      return product;
    } catch (error) {
      throw error;
    }
  },

  // Membuat dan menyimpan produk baru
  createProduct: async (productData) => {
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      throw error;
    }
  },

  // Memperbarui produk berdasarkan ID
  updateProduct: async (productId, updateProductData) => {
    try {
      const product = await Product.findByIdAndUpdate(
        productId,
        { $set: updateProductData },
        { new: true }
      );
      if (!product) {
        throw new Error("Produk tidak ditemukan");
      }
    } catch (error) {
      throw error;
    }
  },

  // Menghapus produk berdasarkan ID
  deleteProduct: async (productId) => {
    try {
      const product = await Product.findOneAndDelete({ _id: productId });
      if (!product) {
        throw new Error("Produk tidak ditemukan");
      }
      return product;
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  },
};

module.exports = productService;
