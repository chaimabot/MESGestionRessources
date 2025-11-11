const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Breakdown = require("./models/Breakdown");
const Machine = require("./models/machine");
const User = require("./models/user");

const run = async () => {
  await connectDB();

  try {
    const machines = await Machine.find().limit(3);
    const users = await User.find(); 

    if (machines.length === 0 || users.length === 0) {
      console.log(
        "Pas de machines ou d'utilisateurs trouvés pour créer des pannes !"
      );
      return;
    }

    const breakdowns = [
      {
        machineId: machines[0]._id,
        description: "Problème mécanique détecté sur la CNC Milling Machine",
        reportedBy: users[3]._id,
        status: "Pending",
      },
      {
        machineId: machines[1]._id,
        description: "Soudure robotisée arrêtée à cause d'une erreur système",
        reportedBy: users[3]._id,
        status: "In Progress",
      },
      {
        machineId: machines[2]._id,
        description: "Maintenance planifiée du Hydraulic Press",
        reportedBy: users[4]._id,
        status: "Resolved",
      },
    ];

    await Breakdown.deleteMany(); // vider la collection avant d'insérer
    await Breakdown.insertMany(breakdowns);

    console.log("Breakdowns ajoutés avec succès !");
  } catch (err) {
    console.error("Erreur d'insertion :", err);
  } finally {
    mongoose.connection.close();
  }
};

run();
