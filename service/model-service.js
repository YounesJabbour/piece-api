const ModelDao = require('../dao/modelDao')

class ModelService {
  constructor() {
    this.modelDao = new ModelDao()
  }

  async getAllModels() {
    return await this.modelDao.getAllModels()
  }

  async createModels(models) {
    return await this.modelDao.createModels(models)
  }

  async deleteAllModels() {
    return await this.modelDao.deleteAllModels()
  }
}

module.exports = ModelService
