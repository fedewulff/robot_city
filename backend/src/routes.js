const { Router } = require("express")
const routes = Router()
const player = require("./controllers/player")
const time = require("./controllers/time")
const coordinates = require("./controllers/coordinates")

//START TIMER
routes.post("/startTime", time.postStartTime)
//STOP TIMER
routes.get("/totalTime/:timeId", time.getTotalTime)
//CHECK CHARACTER COORDINATES
routes.get("/character/:character/:xCoordinate/:yCoordinate", coordinates.checkCharacterCoordinates)
//ADD NAME TO DATABASE
routes.post("/addNameToDB", player.postNameToDB)
//GET NAMES FROM DATABASE
routes.get("/getNamesFromDB", player.getNamesFromDB)
//ADD CHARACTER
routes.post("/addCharacter", coordinates.addCharacter)

module.exports = routes
