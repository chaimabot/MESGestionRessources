const breakdownService = require("../services/BreakdownService");

exports.createBreakdown = async (req, res) => {
  try {
    const breakdown = await breakdownService.createBreakdown({
      machineId: req.body.machineId,
      description: req.body.description,
      reportedBy: req.user._id, // Technicien connecté
    });
    res.status(201).json(breakdown);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllBreakdowns = async (req, res) => {
  try {
    const breakdowns = await breakdownService.getAllBreakdowns();
    res.json(breakdowns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBreakdownStatus = async (req, res) => {
  try {
    const breakdown = await breakdownService.updateBreakdownStatus(
      req.params.id,
      req.body.status
    );
    res.json(breakdown);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.assignTechnician = async (req, res) => {
  try {
    const breakdown = await breakdownService.assignTechnician(
      req.params.id,
      req.body.technicianId
    );
    res.json(breakdown);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
