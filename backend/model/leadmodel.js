const db = require("../config/db");

// CREATE LEAD
exports.createLead = (data, callback) => {
  const sql = `
    INSERT INTO leads SET ?
  `;
  db.query(sql, data, callback);
};

// SHOW ALL LEADS
exports.getAllLeads = (callback) => {
  const sql = `
    SELECT * FROM leads ORDER BY lead_added DESC
  `;
  db.query(sql, callback);
};
