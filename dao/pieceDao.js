const prisma = require('../db/db')

class PieceDao {
  async getAllPieces() {
    const query = {
      include: {
        Modele: {
          select: {
            nom: true,
            marque: {
              select: {
                nom: true,
              },
            },
          },
        },
      },
    }
    return await prisma.piece.findMany(query)
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
