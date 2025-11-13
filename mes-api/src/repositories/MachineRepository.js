const Machine = require("../models/machine");

const machineRepository = {
  getAll: async () => await Machine.find(),
  getById: async (id) => await Machine.findById(id),
};

module.exports = machineRepository;
