const breakdownRepository = require("../repositories/BreakdownRepository");
const User = require("../models/User");

exports.getAllBreakdowns = async () => {
  return await breakdownRepository.findAll();
};

exports.getBreakdownsByMachine = async (machineId) => {
  return await breakdownRepository.findByMachine(machineId);
};

exports.assignTechnician = async (id, technicianId) => {
  const user = await User.findById(technicianId);
  if (!user || user.role !== "technicien") {
    throw new Error("Seul un technicien peut être assigné");
  }
  return await breakdownRepository.assignTechnician(id, technicianId);
};
