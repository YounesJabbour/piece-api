const prisma = require('../db/db')

class ModelDao {
  async getAllModels() {
    return await prisma.modele.findMany()
  }
  async createModels(models) {
    return await prisma.modele.createMany({ data: models })
  }
  async getModelsByMarqueId(id) {
    return await prisma.modele.findMany({ where: { marqueId: id } })
  }

  async deleteAllModels() {
    return await prisma.modele.deleteMany()
  }
}
module.exports = ModelDao
