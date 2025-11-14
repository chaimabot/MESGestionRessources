const Breakdown = require("../models/Breakdown");
const User = require("../models/user");
class BreakdownRepository {
  async findAll() {
    return await Breakdown.find()
      .populate("machineId")
      .populate("reportedBy", "name role")
      .populate("assignedTo", "name role");
  }

  async findByMachine(machineId) {
    return await Breakdown.find({ machineId })
      .populate("reportedBy", "name role")
      .populate("assignedTo", "name role");
  }

  async findById(id) {
    return await Breakdown.findById(id)
      .populate("reportedBy", "name role")
      .populate("assignedTo", "name role");
  }

  async assignTechnician(id, technicianId) {
    return await Breakdown.findByIdAndUpdate(
      id,
      {
        assignedTo: technicianId, 
      },
      { new: true }
    ).populate("assignedTo reportedBy", "name email role");
  }

  async getAllTechnicians() {
    return await User.find({ role: "technicien" }).select("name email role");
  }
}

module.exports = new BreakdownRepository();
