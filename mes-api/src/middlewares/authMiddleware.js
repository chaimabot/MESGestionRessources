const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { jwtSecret } = require("../config/jwt");

const authMiddleware = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Vérifie le token avec le même secret que pour la génération
    const decoded = jwt.verify(token, jwtSecret, {
      algorithms: ["HS256"],
    });

    // Cherche l'utilisateur dans la base
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized", error: error.message });
  }
};

module.exports = authMiddleware;
