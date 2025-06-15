require("dotenv").config()
const express = require("express")
const app = express()
const routes = require("./routes")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: true, credentials: true }))

app.use("/", routes)

const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`))
