const machineRepo = require("../repositories/MachineRepository");

const machineService = {
  getAllMachines: () => machineRepo.getAll(),
  getMachineById: (id) => machineRepo.getById(id),
};

module.exports = machineService;
