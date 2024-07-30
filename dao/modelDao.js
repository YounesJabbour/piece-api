const prisma = require('../db/db')

class ModelDao {
  async getAllModels() {
    return await prisma.model.findMany()
  }
  async createModels(models) {
    return await prisma.modele.createMany({ data: models })
  }

  async deleteAllModels() {
    return await prisma.model.deleteMany()
  }
}
module.exports = ModelDao
