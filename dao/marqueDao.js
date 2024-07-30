const prisma = require('../db/db')

class MarqueDao {
  async getAllMarques() {
    return await prisma.marque.findMany()
  }
  async createMarques(marques) {
    return await prisma.marque.createMany({ data: marques })
  }

  async deleteAllMarques() {
    return await prisma.marque.deleteMany()
  }
}

module.exports = MarqueDao
