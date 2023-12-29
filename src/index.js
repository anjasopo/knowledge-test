const expressApp = require("./config/express");
const connectDB = require("./config/database");

// Koneksi ke database
connectDB();

// Routes

const PORT = process.env.PORT || 3000;

// Server listening
expressApp.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
