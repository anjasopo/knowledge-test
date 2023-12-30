const jwt = require("jsonwebtoken");

const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.header("Authorization");
    console.log("Received token:", token);

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    // Pemeriksaan format token (seharusnya dimulai dengan "Bearer ")
    if (!token.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized: Invalid token format" });
    }

    // Mengambil token setelah kata "Bearer "
    const tokenWithoutBearer = token.slice(7);

    try {
      const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
      console.log("Decoded token:", decoded);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      console.error("Error verifying token:", error.message);
      return res.status(401).json({ error: `Unauthorized: Invalid token - ${error.message}` });
    }
  },
};

module.exports = authMiddleware;
