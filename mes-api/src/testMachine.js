const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Machine = require("./models/machine");

const run = async () => {
  await connectDB();

  const machines = [
    {
      name: "CNC Milling Machine",
      reference: "REF-0012A",
      status: "Active",
      temperature: 70,
      speed: 1200,
      production: 85,
      imageUrl: "/images/cncmillingmachine.jpg",
    },
    {
      name: "Robotic Welder",
      reference: "REF-0024B",
      status: "Breakdown",
      temperature: 150,
      speed: 0,
      production: 0,
      imageUrl: "/images/robotic_welder.jpg",
    },
    {
      name: "Hydraulic Press",
      reference: "REF-0007C",
      status: "Maintenance",
      temperature: 30,
      speed: 0,
      production: 0,
      imageUrl: "/images/hydraulic_press.jpg",
    },
  ];

  try {
    await Machine.deleteMany();
    await Machine.insertMany(machines);
    console.log(" Machines ajoutées avec succès !");
  } catch (err) {
    console.error("Erreur d'insertion :", err);
  } finally {
    mongoose.connection.close();
  }
};

run();
