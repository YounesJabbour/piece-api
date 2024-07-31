const operationDao = require('../dao/operationDao')

class OperationService {
  async createOperation(data) {
    return await operationDao.createOperation(data)
  }

  async createManyOperations(data) {
    return await operationDao.createManyOperations(data)
  }

  async getOperations() {
    return await operationDao.getOperations()
  }

  async getOperationById(id) {
    return await operationDao.getOperationById(id)
  }

  async updateOperation(id, data) {
    return await operationDao.updateOperation(id, data)
  }

  async deleteOperation(id) {
    return await operationDao.deleteOperation(id)
  }

  async deleteAll() {
    return await operationDao.deleteAll()
  }
}

module.exports = OperationService
