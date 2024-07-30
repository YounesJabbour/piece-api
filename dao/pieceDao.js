const prisma = require('../db/db')

class PieceDao {
  async getAllPieces() {
    return await prisma.piece.findMany()
  }
  async createPieces(pieces) {
    return await prisma.piece.createMany({ data: pieces })
  }

  async stock(reference) {
    return await prisma.piece.findUnique({
      where: { reference },
      select: {
        stock: true,
      },
    })
  }
  async deleteAllPieces() {
    return await prisma.piece.deleteMany()
  }
}

module.exports = PieceDao
