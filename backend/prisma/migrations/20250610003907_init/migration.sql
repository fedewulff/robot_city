-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Time" (
    "id" INTEGER NOT NULL,
    "startTime" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "coordinateX1" INTEGER NOT NULL,
    "coordinateX2" INTEGER NOT NULL,
    "coordinateY1" INTEGER NOT NULL,
    "coordinateY2" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Time_id_key" ON "Time"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Character_character_key" ON "Character"("character");
