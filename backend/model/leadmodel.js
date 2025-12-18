const db = require("../config/db");

  // CREATE LEAD

exports.createLead = (data, callback) => {
  const sql = `
    INSERT INTO leads (
      lead_title,
      lead_type,
      project_type,
      company,
      client_name,
      client_position,
      client_contact,
      email,
      website,
      lead_reference,
      plant_capacity_kwp,
      lead_assigned_to,
      lead_status,
      source,
      industry,
      address,
      city,
      state,
      pincode,
      country,
      location,
      description,
      lead_generated_by
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.lead_title,
    data.lead_type,
    data.project_type,
    data.company,
    data.client_name,
    data.client_position,
    data.client_contact,
    data.email,
    data.website,
    data.lead_reference,
    Number(data.plant_capacity_kwp),
    data.lead_assigned_to,
    data.lead_status,
    data.source,
    data.industry,
    data.address,
    data.city,
    data.state,
    data.pincode,
    data.country,
    data.location,
    data.description,
    data.lead_generated_by,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("MYSQL ERROR:", err.sqlMessage);
      return callback(err);
    }
    callback(null, result);
  });
};


  // GET ALL LEADS

exports.getAllLeads = (callback) => {
  db.query("SELECT * FROM leads ORDER BY lead_added DESC", callback);
};


   //GET SINGLE LEAD

exports.getLeadById = (id, callback) => {
  db.query("SELECT * FROM leads WHERE id = ?", [id], callback);
};

// UPDATE LEAD
 
exports.updateLead = (id, data, callback) => {
  const sql = `
    UPDATE leads SET
      lead_title = ?,
      lead_type = ?,
      project_type = ?,
      company = ?,
      client_name = ?,
      client_position = ?,
      client_contact = ?,
      email = ?,
      website = ?,
      lead_reference = ?,
      plant_capacity_kwp = ?,
      lead_assigned_to = ?,
      lead_status = ?,
      source = ?,
      industry = ?,
      address = ?,
      city = ?,
      state = ?,
      pincode = ?,
      country = ?,
      location = ?,
      description = ?
    WHERE id = ?
  `;

  const values = [
    data.lead_title,
    data.lead_type,
    data.project_type,
    data.company,
    data.client_name,
    data.client_position,
    data.client_contact,
    data.email,
    data.website,
    data.lead_reference,
    Number(data.plant_capacity_kwp),
    data.lead_assigned_to,
    data.lead_status,
    data.source,
    data.industry,
    data.address,
    data.city,
    data.state,
    data.pincode,
    data.country,
    data.location,
    data.description,
    id
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("MYSQL UPDATE ERROR:", err.sqlMessage);
      return callback(err);
    }
    callback(null, result);
  });
};
