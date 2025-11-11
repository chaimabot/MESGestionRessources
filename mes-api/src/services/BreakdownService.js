const breakdownRepository = require("../repositories/BreakdownRepository");
const User = require("../models/User");

exports.createBreakdown = async (data) => {
  // Vérifier que reportedBy est un technicien
  const user = await User.findById(data.reportedBy);
  if (!user || user.role !== "technicien") {
    throw new Error("Seul un technicien peut signaler une panne");
  }
  return await breakdownRepository.create(data);
};

exports.getAllBreakdowns = async () => {
  return await breakdownRepository.findAll();
};

exports.getBreakdownsByMachine = async (machineId) => {
  return await breakdownRepository.findByMachine(machineId);
};

exports.updateBreakdownStatus = async (id, status) => {
  return await breakdownRepository.updateStatus(id, status);
};

exports.assignTechnician = async (id, technicianId) => {
  const user = await User.findById(technicianId);
  if (!user || user.role !== "technicien") {
    throw new Error("Seul un technicien peut être assigné");
  }
  return await breakdownRepository.assignTechnician(id, technicianId);
};
