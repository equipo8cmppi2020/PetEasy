const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'br9cpdzhfcmkt1tmto3k-mysql.services.clever-cloud.com',
  user     : 'udddvq1kxkzjvzvk',
  password : 'lscLjJvmTNp9cR2FSHd9',
  database : 'bypvei6sunkubboypedd'
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}