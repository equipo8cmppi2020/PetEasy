const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/usuarios", (req, res) => {
    connection.query('SELECT * FROM actores',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})
router.post("/iniciar_sesion", (req, res) => {
  const { Correo, Contrasena } = req.body
  res.json({auth:"Usuario Autenticado", status:"Iniciado", token:"abcd123"})
})
  
module.exports = router