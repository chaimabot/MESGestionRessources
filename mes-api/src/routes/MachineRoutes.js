const express = require("express");
const router = express.Router();
const machineController = require("../controllers/MachineController");

router.get("/getAll", machineController.getAll);
router.post("/create", machineController.create);

module.exports = router;
