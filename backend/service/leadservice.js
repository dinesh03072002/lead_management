const Lead = require("../model/leadmodel"); 

exports.createLead = (data, callback) => {
  if (!data.client_name || !data.plant_capacity_kwp) {
    return callback({ message: "Missing required fields" });
  }

  data.lead_title = `${data.client_name} - ${data.plant_capacity_kwp} kWp`;
  data.plant_capacity_kwp = Number(data.plant_capacity_kwp);

  Lead.createLead(data, callback);
};

exports.getLeads = (callback) => {
  Lead.getAllLeads(callback);
};
