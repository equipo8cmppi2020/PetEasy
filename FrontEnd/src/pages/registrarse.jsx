import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
export default function registrarse() {
  return (
    <div className="App">
      <h5>PetEasy</h5>
      <h1>
        <img
          src="https://i.imgur.com/rVTvJoV.png"
          alt=""
          classname=""
          width="230"
          height="230"
        />
      </h1>
      <div classname="container" />
      <h5>Correo electronico*</h5>
      <div classname="btn-group">
        <input type="text"></input>
      </div>
      <div classname="container" />
      <div classname="container" />
      <h5>Contraseña*</h5>
      <div classname="btn-group">
        <input type="text"></input>
      </div>
      <div classname="container" />
      <div classname="container" />
      <h5>Confirmar contraseña*</h5>
      <div classname="btn-group">
        <input type="text"></input>
      </div>
      <div classname="container" />
      <p />
      <Link to="/inicio" className="btn btn-primary boton_separacion">
        Registrarse
      </Link>
      <Link to="/" className="btn btn-primary boton_separacion">
        Volver
      </Link>
    </div>
  );
}
