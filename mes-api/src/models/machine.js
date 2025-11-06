const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: {
    type: String,
    enum: ["available", "occupied", "maintenance"],
    default: "available",
  },
});

module.exports = mongoose.model("Machine", machineSchema);
