const ProjectTypeModel = require("../model/projectTypeModel");

const ProjectTypeService = {
  getAll: () => ProjectTypeModel.getAll(),
  create: (data) => ProjectTypeModel.create(data),
  update: (id, data) => ProjectTypeModel.update(id, data),
  delete: (id) => ProjectTypeModel.delete(id)
};

module.exports = ProjectTypeService;
