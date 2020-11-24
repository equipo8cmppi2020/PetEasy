const { Router } = require("express")
const router = Router()
const mysqlConnection = require('../db/mysql')
    
/*router.get("/usuarios", (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})*/

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
        documento,
        tipo_documento,
        nombres,
        apellidos,
        contrasena,
        correo,
        telefono_celular,
        numero_expediente,
        genero,
        fecha_nacimiento,
        estado_actor_id,
        institucion_id,
        tipo_actor_id
    } = req.body
    const SQL = `INSERT INTO actores(documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id,tipo_actor_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)` 
    const DATA = [documento, tipo_documento, nombres, apellidos, contrasena, correo, telefono_celular, numero_expediente, genero, fecha_nacimiento, estado_actor_id, institucion_id, tipo_actor_id]

    const response = await connection.query(SQL, DATA)

    const result = await connection.query(`SELECT * FROM actores WHERE  id = ?`, [response.insertId])

    res.json(result[0])
  }catch(error){
    console.log(error)
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})
  
module.exports = router
