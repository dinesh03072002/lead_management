const leadService = require("../service/leadservice");

// ADD LEAD
exports.addLead = (req, res) => {
  console.log("POST /api/leads/add HIT");
  console.log("REQUEST BODY:", req.body);

  leadService.createLead(req.body, (err) => {
    if (err) {
      console.error("SERVICE ERROR:", err);
      return res.status(400).json(err);
    }
    res.status(200).json({ message: "Lead added successfully" });
  });
};


// GET LEADS
exports.getLeads = (req, res) => {
  leadService.getLeads((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch leads" });
    }
    res.json(results);
  });
};

// GET SINGLE LEAD
exports.getLeadById = (req, res) => {
  const { id } = req.params;

  leadService.getLeadById(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

// UPDATE LEAD
exports.updateLead = (req, res) => {
  const { id } = req.params;

  leadService.updateLead(id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Lead updated successfully" });
  });
};
