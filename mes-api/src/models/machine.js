const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
  name: String,
  reference: String,
  status: {
    type: String,
    enum: ["Active", "Maintenance", "Breakdown"],
    default: "Active",
  },
  temperature: Number,
  speed: Number,
  production: Number,
  imageUrl: String,
});

module.exports =
  mongoose.models.Machine || mongoose.model("Machine", machineSchema);
