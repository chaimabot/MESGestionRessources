require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET, 
  jwtExpires: "1d" 
};