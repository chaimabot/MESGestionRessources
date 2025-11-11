const express = require("express");
const router = express.Router();
const breakdownController = require("../controllers/BreakdownController");
const authMiddleware = require("../middlewares/authMiddleware");

// Créer une panne (technicien)
router.post("/", authMiddleware, breakdownController.createBreakdown);

// Voir toutes les pannes (responsable ou technicien)
router.get("/", authMiddleware, breakdownController.getAllBreakdowns);

// Mettre à jour le statut (responsable)
router.put(
  "/:id/status",
  authMiddleware,
  breakdownController.updateBreakdownStatus
);

// Assigner un technicien (responsable)
router.put("/:id/assign", authMiddleware, breakdownController.assignTechnician);

module.exports = router;
