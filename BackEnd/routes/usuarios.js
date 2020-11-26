const { Router } = require("express")
const router = Router()
const mysqlConnection = require('../db/mysql')
    
router.get('/usuario',(req,res)=>{
  try{
  mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  }catch(error){
    res.status(502).json({mensaje:"Error"})
  }
})


router.post("/iniciar_sesion", (req, res) => {
  const { Correo, Contrasena } = req.body
  res.json({auth:"Usuario Autenticado", status:"Iniciado", token:"abcd123"})
})
router.post('/usuario', async(req,res) => {
  try{
    const {
        contrasena,
        nombre_de_usuario
    } = req.body
    const SQL = `INSERT INTO usuario(contrasena, nombre_de_usuario) VALUES(?, ?)` 
    const DATA = [contrasena, nombre_de_usuario]

    const response = await mysqlConnection.query(SQL, DATA)

    const result = await mysqlConnection.query(`SELECT * FROM usuario WHERE  id = ?`, [response.insertId])

    res.json(result[0])
  }catch(error){
    console.log(error)
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})
  
module.exports = router
