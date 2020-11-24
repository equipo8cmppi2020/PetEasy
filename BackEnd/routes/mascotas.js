const { Router } = require("express")
const router = Router()
const mysqlConnection = require('../db/mysql')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')

const cargador = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + path.extname(file.originalname));
    }
  })
})

router.get('/mascotas', (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM mascotas', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    res.status(502).json({ mensaje: "Error" })
  }
})


router.post("/formulario_agregar_mascota", (req, res) => {
  const { Id_mascota, Raza, Nombre_mascota, Tipo_mascota, Imagen } = req.body
  res.json({ auth: "Mascota creada con exito", status: "Creado", token: "abcd123" })
})
router.post('/mascotas', cargador.single('imagen'), async (req, res) => {
  try {
    const {
      id_mascota,
      raza,
      nombre_mascota,
      tipo_mascota,
    } = req.body
    var imagen = JSON.stringify(req.file)
    const SQL = `INSERT INTO mascotas(id_mascota, raza, nombre_mascota, tipo_mascota, imagen) VALUES(?)`
    const DATA = [id_mascota, raza, nombre_mascota, tipo_mascota, imagen]
    const response = await connection.query(SQL, DATA)

    const result = await connection.query(`SELECT * FROM mascotas WHERE  id = ?`, [response.insertId])

    res.json(result[0])
  } catch (error) {
    console.log(error)
    res.status(502).json({ mensaje: "Error en el servidor." })
  }
})

module.exports = router
