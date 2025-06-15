/*
  Warnings:

  - You are about to drop the column `time` on the `Player` table. All the data in the column will be lost.
  - Added the required column `milliseconds` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minutes` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seconds` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "time",
ADD COLUMN     "milliseconds" TEXT NOT NULL,
ADD COLUMN     "minutes" TEXT NOT NULL,
ADD COLUMN     "seconds" TEXT NOT NULL;
