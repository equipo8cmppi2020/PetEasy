import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
var hora = 0;
var minuto = 0;
const horasuma = hora + 1;
if (hora > 12) {
  hora - 1;
}
if (hora < 0) {
  hora + 1;
}
if (minuto > 60) {
  minuto - 1;
}
if (minuto < 0) {
  minuto + 1;
}
export default function editar_alimentacion() {
  return (
    <div className="App">
      <h6>PetEasy</h6>
      <img
        src="https://i.imgur.com/rVTvJoV.png"
        alt=""
        classname=""
        width="100"
        height="100"
      />
      <h1>Alimentación</h1>
      <button class="botonflechas">
        <img
          class="arrows"
          src="https://freepngimg.com/thumb/web_design/24677-8-up-arrow-transparent-image.png"
          alt=""
          height="50px"
          width="50px"
        />
      </button>
      <button class="botonflechas">
        <img
          src="https://freepngimg.com/thumb/web_design/24677-8-up-arrow-transparent-image.png"
          alt=""
          height="50px"
          width="50px"
        />
      </button>
      <p />
      <h1>
        {hora} : {minuto}
      </h1>
      <button class="botonflechas" onClick={() => horasuma}>
        <img
          class="arrows2"
          src="https://image.flaticon.com/icons/png/512/7/7657.png"
          alt=""
          height="30px"
          width="30px"
        />
      </button>
      <button class="botonflechas">
        <img
          src="https://image.flaticon.com/icons/png/512/7/7657.png"
          alt=""
          height="30px"
          width="30px"
        />
      </button>
      <p />
      <select classname="hora_dia" name="am-pm">
        <option value="1">am</option>
        <option value="2">pm</option>
      </select>
      <p />
      <h5>Tiempo de anticipación</h5>
      <p />
      <select classname="tiempo_anticipacion" name="tiempo-anticipacion">
        <option value="3">2 Minutos</option>
        <option value="4">3 Minutos</option>
        <option value="5">4 Minutos</option>
        <option value="6">5 Minutos</option>
        <option value="7">7 Minutos</option>
        <option value="8">9 Minutos</option>
        <option value="9">10 Minutos</option>
      </select>
      <p />
      <Link to="/horarios" className="btn btn-primary">
        Volver
      </Link>
      <Link to="/horarios" className="btn btn-primary boton_separacion2">
        Guardar cambios
      </Link>
      <p />
    </div>
  );
}
