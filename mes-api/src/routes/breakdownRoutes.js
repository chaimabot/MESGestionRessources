const express = require("express");
const router = express.Router();
const breakdownController = require("../controllers/BreakdownController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, breakdownController.getAllBreakdowns);

// Assigner un technicien (responsable)
router.put("/:id/assign", authMiddleware, breakdownController.assignTechnician);
router.get(
  "/technicians",
  authMiddleware,
  breakdownController.getAllTechnicians
);

module.exports = router;
