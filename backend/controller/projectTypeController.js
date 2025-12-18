const ProjectTypeService = require("../service/projectTypeService");

exports.getAll = async (req, res) => {
  try {
    const projectTypes = await ProjectTypeService.getAll();
    res.json(projectTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    await ProjectTypeService.create(req.body);
    res.json({ message: "Project type created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await ProjectTypeService.update(req.params.id, req.body);
    res.json({ message: "Project type updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await ProjectTypeService.delete(req.params.id);
    res.json({ message: "Project type deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
