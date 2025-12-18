const db = require("../config/db");

const ProjectTypeModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM project_types", (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      const sql =
        "INSERT INTO project_types (project_type_name, description) VALUES (?, ?)";
      db.query(
        sql,
        [data.project_type_name, data.description],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },

  update: (id, data) => {
    return new Promise((resolve, reject) => {
      const sql =
        "UPDATE project_types SET project_type_name=?, description=? WHERE id=?";
      db.query(
        sql,
        [data.project_type_name, data.description, id],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM project_types WHERE id=?",
        [id],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  }
};

module.exports = ProjectTypeModel;
