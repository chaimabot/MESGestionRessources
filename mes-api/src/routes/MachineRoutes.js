const express = require("express");
const router = express.Router();
const machineController = require("../controllers/MachineController");

router.get("/", machineController.getAll);

router.get("/:id", machineController.getById);



module.exports = router;
