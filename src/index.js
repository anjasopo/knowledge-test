const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

// Load dari .env
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Database Connection
connectDB(); // Memanggil fungsi koneksi

// Server Listening
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
