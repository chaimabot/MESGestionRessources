const express = require("express");
const router = express.Router();
const machineController = require("../controllers/MachineController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, machineController.getAll);

router.get("/:id", authMiddleware, machineController.getById);

module.exports = router;
