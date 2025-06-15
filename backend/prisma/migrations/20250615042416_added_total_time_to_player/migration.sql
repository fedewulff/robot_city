/*
  Warnings:

  - Added the required column `totalTime` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "totalTime" INTEGER NOT NULL;
