const prisma = require("../prisma_client/prisma_client")

//SET START TIME
module.exports.postStartTime = async (req, res) => {
  await prisma.time.create({
    data: {
      id: req.body.randomNumber,
      startTime: Date.now(),
    },
  })
  res.json({ msg: "done" })
}
//STOP TIME
module.exports.getTotalTime = async (req, res) => {
  const endTime = Date.now()
  const time = await prisma.time.findUnique({
    where: {
      id: Number(req.params.timeId),
    },
  })
  const totalTime = endTime - Number(time.startTime)

  const players = await prisma.player.findMany({
    orderBy: { totalTime: "asc" },
  })
  console.log(players)
  console.log(totalTime)
  const top10 = totalTime - (players[9] ? players[9].time : 3599999)
  console.log(top10)

  if (totalTime < 1000) {
    const miliseconds = totalTime.toString()
    res.json({ top10, min: "0", sec: "0", mil: miliseconds, totalTime })
    return
  }
  if (totalTime < 60000) {
    const secondsArray = (totalTime / 1000).toString().split(".")
    res.json({ top10, min: "0", sec: secondsArray[0], mil: secondsArray[1], totalTime })
    return
  }
  if (totalTime < 3600000) {
    const minutesArray = (totalTime / 1000 / 60).toString().split(".")
    const secondsArray = ((totalTime / 1000) % 60).toFixed(3).split(".")
    res.json({ top10, min: minutesArray[0], sec: secondsArray[0], mil: secondsArray[1], totalTime })
    return
  }
  res.json({ totalTime })
}
