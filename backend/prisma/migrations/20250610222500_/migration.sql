/*
  Warnings:

  - You are about to alter the column `coordinateX1` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,3)`.
  - You are about to alter the column `coordinateX2` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,3)`.
  - You are about to alter the column `coordinateY1` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,3)`.
  - You are about to alter the column `coordinateY2` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,3)`.

*/
-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "coordinateX1" SET DATA TYPE DECIMAL(6,3),
ALTER COLUMN "coordinateX2" SET DATA TYPE DECIMAL(6,3),
ALTER COLUMN "coordinateY1" SET DATA TYPE DECIMAL(6,3),
ALTER COLUMN "coordinateY2" SET DATA TYPE DECIMAL(6,3);
