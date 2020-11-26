const express = require("express")
const path = require("path")
const morgan = require("morgan")
const app = express()
const cors = require('cors')


//Middelwares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'));

//Routes
app.use("/api/", require("./routes/usuarios"))
app.use("/api/", require("./routes/mascotas"))

app.get("/", (req, res) => {
  res.send("Api CRUD")
})
app.get("/api", (req, res) => {
  res.send("Api CRUD2")
})
app.set("ABSOLUTE_PATH", `${__dirname}/`)
app.set("PORT", 8081)

app.listen(app.get("PORT"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("PORT")}`)
})