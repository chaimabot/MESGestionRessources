const breakdownService = require("../services/BreakdownService");


exports.getAllBreakdowns = async (req, res) => {
  try {
    const breakdowns = await breakdownService.getAllBreakdowns();
    res.json(breakdowns);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
