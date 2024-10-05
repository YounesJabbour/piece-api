const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const prisma = new PrismaClient()

async function main() {
  // Seed marques
  const marques = []
  for (let i = 0; i < 20; i++) {
    const marque = await prisma.marque.create({
      data: {
        nom: faker.company.name(),
      },
    })
    marques.push(marque)
  }

  // Seed modeles with relation to marque
  const modeles = []
  for (let i = 0; i < 20; i++) {
    const modele = await prisma.modele.create({
      data: {
        nom: faker.vehicle.model(),
        marqueId: marques[i % marques.length].id, // Foreign key relation to marque
      },
    })
    modeles.push(modele)
  }

  // Seed pieces with relation to modele
  const pieces = []
  for (let i = 0; i < 20; i++) {
    const piece = await prisma.piece.create({
      data: {
        reference: faker.string.alphanumeric(10),
        description: faker.commerce.productDescription(),
        libelle: faker.commerce.productName(),
        stock: faker.number.int({ min: 10, max: 100 }),
        prix: faker.number.float({ min: 10, max: 500, precision: 0.01 }),
        modeleId: modeles[i % modeles.length].id, // Foreign key relation to Modele
      },
    })
    pieces.push(piece)
  }

  // Seed commandes
  const commandes = []
  for (let i = 0; i < 20; i++) {
    const commande = await prisma.commande.create({
      data: {
        firstAccordDate: faker.date.past(),
        secondAccordDate: faker.date.past(),
        dateCommande: faker.date.past(),
        dateLivraison: faker.date.future(),
        commentaire: faker.lorem.sentence(),
        statut: faker.helpers.arrayElement([
          'EN_ATTENTE',
          'EN_COURS',
          'LIVREE',
        ]),
      },
    })
    commandes.push(commande)
  }

  // Seed CommandePiece with relation to Commande and Piece
  for (let i = 0; i < 20; i++) {
    await prisma.commandePiece.create({
      data: {
        pieceId: pieces[i % pieces.length].reference, // Foreign key relation to Piece
        commandeId: commandes[i % commandes.length].id, // Foreign key relation to Commande
        quantite: faker.number.int({ min: 1, max: 10 }),
      },
    })
  }

  // Seed operations
  for (let i = 0; i < 20; i++) {
    await prisma.operation.create({
      data: {
        titre: faker.commerce.department(),
      },
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
