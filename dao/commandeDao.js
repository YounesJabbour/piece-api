const prisma = require('../db/db')

class CommandeDao {
  async create(commande, pieces) {
    const newCommande = await prisma.Commande.create({
      data: {
        firstAccordDate: commande.firstAccordDate,
        secondAccordDate: commande.secondAccordDate,
        dateLivraison: commande.deliveryDate,
        commentaire: commande.comments,
      },
    })
    const newPiecesOfCommande = await prisma.commandePiece.createMany({
      data: pieces.map((piece) => ({
        commandeId: newCommande.id,
        pieceId: piece.reference,
        quantite: piece.quantity,
      })),
    })
    return { commande: newCommande, pieces: newPiecesOfCommande }
  }

  async getAll() {
    return await prisma.Commande.findMany({
      include: {
        pieces: {
          select: {
            piece: {
              select: {
                reference: true,
                libelle: true,
                description: true,
                prix: true,
              },
            },
            quantite: true,
          },
        },
      },
    })
  }
}

module.exports = CommandeDao
