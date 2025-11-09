const machineService = require("../services/MachineService");
const response = require("../utils/response");

const machineController = {
  getAll: (req, res) => {
    const machines = machineService.getAllMachines();
    response.success(res, machines);
  },
  getById: (req, res) => {
    const machine = machineService.getMachineById(req.params.id);
    if (!machine) return response.error(res, "Machine not found", 404);
    response.success(res, machine);
  },
  addMachine: (req, res) => {
    const newMachine = machineService.addMachine(req.body);
    response.success(res, newMachine);
  },
  updateStatus: (req, res) => {
    const updatedMachine = machineService.updateMachineStatus(
      req.params.id,
      req.body.status
    );
    if (!updatedMachine) return response.error(res, "Machine not found", 404);
    response.success(res, updatedMachine);
  },
};

module.exports = machineController;
