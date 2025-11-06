const machineService = require("../services/MachineService");

class MachineController {
  async getAll(req, res) {
    const machines = await machineService.getMachines();
    res.json(machines);
  }

  async create(req, res) {
    const machine = await machineService.addMachine(req.body);
    res.status(201).json(machine);
  }
}

module.exports = new MachineController();
