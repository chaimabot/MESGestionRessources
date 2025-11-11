const machineService = require("../services/MachineService");
const response = require("../utils/response");

const machineController = {
  getAll: async (req, res) => {
    try {
      const machines = await machineService.getAllMachines();
      response.success(res, machines);
    } catch (error) {
      response.error(res, error.message, 500);
    }
  },

  getById: async (req, res) => {
    try {
      const machine = await machineService.getMachineById(req.params.id);
      if (!machine) return response.error(res, "Machine not found", 404);
      response.success(res, machine);
    } catch (error) {
      response.error(res, error.message, 500);
    }
  },

  addMachine: async (req, res) => {
    try {
      const newMachine = await machineService.addMachine(req.body);
      response.success(res, newMachine);
    } catch (error) {
      response.error(res, error.message, 500);
    }
  },

  updateStatus: async (req, res) => {
    try {
      const updatedMachine = await machineService.updateMachineStatus(
        req.params.id,
        req.body.status
      );
      if (!updatedMachine) return response.error(res, "Machine not found", 404);
      response.success(res, updatedMachine);
    } catch (error) {
      response.error(res, error.message, 500);
    }
  },
};

module.exports = machineController;
