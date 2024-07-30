const marqueDao = require('../dao/marqueDao')

class MarqueService {
  constructor() {
    this.marqueDao = new marqueDao()
  }

  async getAllMarques() {
    return await this.marqueDao.getAllMarques()
  }

  async createMarques(marques) {
    return await this.marqueDao.createMarques(marques)
  }

  async deleteAll() {
    return await this.marqueDao.deleteAllMarques()
  }
}

module.exports = MarqueService
