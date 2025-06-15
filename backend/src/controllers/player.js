const prisma = require("../prisma_client/prisma_client")

//ADD PLAYER TO DB
module.exports.postNameToDB = async (req, res) => {
  console.log(req.body)
  await prisma.player.create({
    data: {
      name: req.body.name,
      totalTime: req.body.finalTime.totalTime,
      minutes: req.body.finalTime.min,
      seconds: req.body.finalTime.sec,
      milliseconds: req.body.finalTime.mil,
    },
  })
  res.json({ msg: "player added to db" })
}

module.exports.getNamesFromDB = async (req, res) => {
  const players = await prisma.player.findMany({
    orderBy: { totalTime: "asc" },
  })
  res.json({ players })
}
