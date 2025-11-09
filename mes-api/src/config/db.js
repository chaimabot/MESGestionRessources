const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/MES_Production', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connecté...');
  } catch (err) {
    console.error('Erreur MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
