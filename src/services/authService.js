const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authService = {
  // Membuat user baru
  register: async (userData) => {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  },

  // Memverifikasi kredensial user dan menghasilkan token JWT
  login: async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User tidak ditemukan");
      }

      // Membandingkan hash password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Password salah");
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return { user, token };
    } catch (error) {
      throw error;
    }
  },

  // Mengambil profil user berdasarkan ID
  getUserProfile: async (userId) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User tidak ditemukan");
      }
      return user;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = authService;
