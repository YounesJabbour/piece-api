const prisma = require('../db/db')

class OperationDao {
  async createOperation(data) {
    return await prisma.Operation.create({
      data: data,
    })
  }

  async createManyOperations(data) {
    return await prisma.Operation.createMany({
      data: data,
    })
  }

  async getOperations() {
    return await prisma.Operation.findMany()
  }

  async getOperationById(id) {
    return await prisma.Operation.findUnique({
      where: {
        id: id,
      },
    })
  }

  async updateOperation(id, data) {
    return await prisma.Operation.update({
      where: {
        id: id,
      },
      data: data,
    })
  }

  async deleteOperation(id) {
    return await prisma.Operation.delete({
      where: {
        id: id,
      },
    })
  }

  async deleteAll() {
    return await prisma.Operation.deleteMany()
  }
}

module.exports = new OperationDao()
