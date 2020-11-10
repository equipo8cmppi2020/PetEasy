import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
export default function editar_bano() {
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
      <h1>Baño</h1>
      <img
        class="arrows"
        src="https://freepngimg.com/thumb/web_design/24677-8-up-arrow-transparent-image.png"
        alt=""
        height="50px"
        width="50px"
      />
      <img
        src="https://freepngimg.com/thumb/web_design/24677-8-up-arrow-transparent-image.png"
        alt=""
        height="50px"
        width="50px"
      />
      <p />
      <h1 class="hora">10:10</h1>
      <img
        class="arrows2"
        src="https://image.flaticon.com/icons/png/512/7/7657.png"
        alt=""
        height="30px"
        width="30px"
      />
      <img
        src="https://image.flaticon.com/icons/png/512/7/7657.png"
        alt=""
        height="30px"
        width="30px"
      />
      <p />
      <select classname="hora_dia" name="am-pm">
        <option value="1">am</option>
        <option value="2">pm</option>
      </select>
      <p />
      <select classname="dias_semana" name="dia-semana">
        <option value="3">Lunes</option>
        <option value="4">Martes</option>
        <option value="5">Miercoles</option>
        <option value="6">Jueves</option>
        <option value="7">Viernes</option>
        <option value="8">Sábado</option>
        <option value="9">Domingo</option>
      </select>
      <p />
      <Link to="/lista" className="btn btn-primary">
        Volver
      </Link>
      <Link to="/lista" className="btn btn-primary boton_separacion2">
        Guardar Cambios
      </Link>
      <p />
    </div>
  );
}
