const mongoose = require("mongoose");
const connectDB = require("./config/db");
const User = require("./models/user");
const { hashPassword } = require("./utils/hash");

const run = async () => {
  await connectDB();

  const passwordHashed = await hashPassword("123456");

  const newUser = new User({
    name: "Aya Hmida",
    email: "aya@gmail.com",
    password: passwordHashed,
    role: "responsable",
  });

  await newUser.save();
  console.log("✅ Utilisateur ajouté avec succès !");
  mongoose.connection.close();
};

run();
