const Lead = require("../model/leadmodel");

// CREATE LEAD
exports.createLead = (data, callback) => {
  if (!data.client_name || !data.plant_capacity_kwp) {
    return callback({ message: "Missing required fields" });
  }

  data.lead_title = `${data.client_name} - ${data.plant_capacity_kwp} kWp`;
  data.plant_capacity_kwp = Number(data.plant_capacity_kwp);

  Lead.createLead(data, callback);
};

// GET ALL LEADS
exports.getLeads = (callback) => {
  Lead.getAllLeads(callback);
};

//  GET SINGLE LEAD BY ID
exports.getLeadById = (id, callback) => {
  Lead.getLeadById(id, callback);
};

// UPDATE LEAD
exports.updateLead = (id, data, callback) => {
  data.lead_title = `${data.client_name} - ${data.plant_capacity_kwp} kWp`;
  data.plant_capacity_kwp = Number(data.plant_capacity_kwp);

  Lead.updateLead(id, data, callback);
};