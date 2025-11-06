const machineRepository = require("../repositories/MachineRepository");

class MachineService {
  async getMachines() {
    return await machineRepository.findAll();
  }

  async addMachine(machineDTO) {
    return await machineRepository.create(machineDTO);
  }
}

module.exports = new MachineService();
