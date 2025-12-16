const Lead = require("../model/leadmodel");

// ADD NEW LEAD
exports.addLead = (req, res) => {
  const data = req.body;

  // Auto-generate lead title
  data.lead_title = `${data.client_name} - ${data.plant_capacity_kwp} kWp`;

  Lead.createLead(data, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Lead added successfully" });
  });
};

// GET ALL LEADS
exports.getLeads = (req, res) => {
  Lead.getAllLeads((err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(rows);
  });
};
