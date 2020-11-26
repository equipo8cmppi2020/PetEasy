const { Router } = require("express")
const router = Router()
const mysqlConnection = require('../db/mysql')
    
router.get('/horario',(req,res)=>{
  try{
  mysqlConnection.query('SELECT * FROM horario', (err, rows, fields) => {
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


router.post("/nuevo_alimentacion", (req, res) => {
  const { Hora, TiempoAnticipacion, AmPm } = req.body
  res.json({auth:"Creado con exito", status:"Creado", token:"abcd123"})
})
router.post('/horario', async(req,res) => {
  try{
    const {
        hora,
        tiempo_anticipación
        am/pm
    } = req.body
    const SQL = `INSERT INTO horario(hora, tiempo_anticipación, am/pm) VALUES(?, ?, ?)` 
    const DATA = [hora, tiempo_anticipación, am/pm]

    const response = await mysqlConnection.query(SQL, DATA)

    const result = await mysqlConnection.query(`SELECT * FROM horario WHERE  id = ?`, [response.insertId])

    res.json(result[0])
  }catch(error){
    console.log(error)
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})
  
module.exports = router
