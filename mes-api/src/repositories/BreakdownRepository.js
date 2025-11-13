const Breakdown = require("../models/Breakdown");

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
      { assignedTo: technicianId },
      { new: true }
    );
  }
}

module.exports = new BreakdownRepository();
