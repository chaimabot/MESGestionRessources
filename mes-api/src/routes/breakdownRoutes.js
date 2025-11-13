const express = require("express");
const router = express.Router();
const breakdownController = require("../controllers/BreakdownController");
const authMiddleware = require("../middlewares/authMiddleware");


router.get("/", authMiddleware, breakdownController.getAllBreakdowns);


router.put("/:id/assign", authMiddleware, breakdownController.assignTechnician);

module.exports = router;
