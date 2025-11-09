const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpires } = require("../config/jwt");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    jwtSecret,
    { expiresIn: jwtExpires }
  );
};

module.exports = { generateToken };
