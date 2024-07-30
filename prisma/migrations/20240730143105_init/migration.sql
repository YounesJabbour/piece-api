-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('EN_ATTENTE', 'EN_COURS', 'LIVREE');

-- CreateTable
CREATE TABLE "marque" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "marque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modele" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "marqueId" INTEGER NOT NULL,

    CONSTRAINT "Modele_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Piece" (
    "reference" TEXT NOT NULL,
    "description" TEXT,
    "libelle" TEXT,
    "stock" INTEGER,
    "prix" DOUBLE PRECISION,
    "modeleId" INTEGER,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("reference")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" SERIAL NOT NULL,
    "dateCommande" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateLivraison" TIMESTAMP(3),
    "commentaire" TEXT,
    "statut" "Statut" NOT NULL DEFAULT 'EN_ATTENTE',

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandePiece" (
    "pieceId" TEXT NOT NULL,
    "commandeId" INTEGER NOT NULL,
    "quantite" INTEGER,

    CONSTRAINT "CommandePiece_pkey" PRIMARY KEY ("pieceId","commandeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Piece_reference_key" ON "Piece"("reference");

-- AddForeignKey
ALTER TABLE "Modele" ADD CONSTRAINT "Modele_marqueId_fkey" FOREIGN KEY ("marqueId") REFERENCES "marque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Piece" ADD CONSTRAINT "Piece_modeleId_fkey" FOREIGN KEY ("modeleId") REFERENCES "Modele"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandePiece" ADD CONSTRAINT "CommandePiece_pieceId_fkey" FOREIGN KEY ("pieceId") REFERENCES "Piece"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandePiece" ADD CONSTRAINT "CommandePiece_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
