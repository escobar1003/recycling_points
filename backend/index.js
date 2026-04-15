const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando 🚀")
})

app.get("/puntos", (req, res) => {
  res.json([{ nombre: "Punto Verde" }])
})

app.post("/puntos", (req, res) => {
  res.json({
    mensaje: "Punto creado",
    data: req.body
  })
})

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000")
})