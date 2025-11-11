const Machine = require("../models/machine");

const machineRepository = {
  getAll: async () => await Machine.find(),
  getById: async (id) => await Machine.findById(id),
  add: async (machineData) => await Machine.create(machineData),
  updateStatus: async (id, status) =>
    await Machine.findByIdAndUpdate(id, { status }, { new: true }),
};

module.exports = machineRepository;
