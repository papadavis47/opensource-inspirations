/*
  Warnings:

  - The primary key for the `Programmer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `description` to the `Programmer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Programmer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Programmer" DROP CONSTRAINT "Programmer_pkey",
ADD COLUMN     "contacted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Programmer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Programmer_id_seq";
