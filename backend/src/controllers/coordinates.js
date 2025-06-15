const prisma = require("../prisma_client/prisma_client")

//ADD CHARACTER
module.exports.addCharacter = async (req, res) => {
  console.log(req.body)
  await prisma.character.create({
    data: {
      character: req.body.character,
      coordinateX1: req.body.coordinateX1,
      coordinateX2: req.body.coordinateX2,
      coordinateY1: req.body.coordinateY1,
      coordinateY2: req.body.coordinateY2,
    },
  })
  res.json({ msg: "character added" })
}

//CHECK CHARACTER
module.exports.checkCharacterCoordinates = async (req, res) => {
  const x = Number(req.params.xCoordinate)
  const y = Number(req.params.yCoordinate)
  const coordinates = await prisma.character.findUnique({
    where: {
      character: req.params.character,
    },
  })
  const x1Coord = Number(coordinates.coordinateX1)
  const x2Coord = Number(coordinates.coordinateX2)
  const y1Coord = Number(coordinates.coordinateY1)
  const y2Coord = Number(coordinates.coordinateY2)
  if (x1Coord < x && x < x2Coord && y1Coord < y && y < y2Coord) {
    res.json({ msg: req.params.character })
    return
  }
  res.json({ msg: "wrong coordinates" })
}
