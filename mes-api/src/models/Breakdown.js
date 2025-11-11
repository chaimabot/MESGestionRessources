const mongoose = require("mongoose");

const breakdownSchema = new mongoose.Schema({
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine",
    required: true,
  },
  description: { type: String, required: true },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Technicien
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Technicien affecté par le responsable
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date },
});

module.exports =
  mongoose.models.Breakdown || mongoose.model("Breakdown", breakdownSchema);
