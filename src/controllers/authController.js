const authService = require("../services/authService");

const authController = {
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Email:", email);
      console.log("Password:", password);

      const { user, token } = await authService.login(email, password);
      console.log("Login berhasil:", user);

      res.json({ user, token });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(401).json({ error: "Invalid credentials" });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const userId = req.userId; // Diambil dari middleware yang menyimpan ID pengguna dari token JWT
      const user = await authService.getUserProfile(userId);
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(404).json({ error: "User not found" });
    }
  },
};

module.exports = authController;
