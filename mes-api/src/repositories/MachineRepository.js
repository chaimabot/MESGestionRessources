const Machine = require("../models/machine");

class MachineRepository {
  findAll() {
    return Machine.find();
  }

  create(data) {
    return Machine.create(data);
  }
}

module.exports = new MachineRepository();
