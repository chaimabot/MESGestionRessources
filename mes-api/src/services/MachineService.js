const machineRepo = require("../repositories/MachineRepository");

const machineService = {
  getAllMachines: () => machineRepo.getAll(),
  getMachineById: (id) => machineRepo.getById(id),
  addMachine: (data) => machineRepo.add(data),
  updateMachineStatus: (id, status) => machineRepo.updateStatus(id, status),
};

module.exports = machineService;
