-- DropForeignKey
ALTER TABLE "Modele" DROP CONSTRAINT "Modele_marqueId_fkey";

-- AlterTable
ALTER TABLE "Commande" ALTER COLUMN "statut" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Modele" ALTER COLUMN "nom" DROP NOT NULL,
ALTER COLUMN "marqueId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "marque" ALTER COLUMN "nom" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Modele" ADD CONSTRAINT "Modele_marqueId_fkey" FOREIGN KEY ("marqueId") REFERENCES "marque"("id") ON DELETE SET NULL ON UPDATE CASCADE;
