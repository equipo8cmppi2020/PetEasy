import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
export default function recuperarcontraseña_correo() {
  return (
    <div className="App">
      <h5>PetEasy</h5>
      <h1>
        <img
          src="https://i.imgur.com/rVTvJoV.png"
          alt=""
          classname=""
          width="180"
          height="180"
        />
      </h1>
      <div classname="container">
        <h5>Correo electronico*</h5>
        <div classname="btn-group">
          <input type="text"></input>
        </div>
        <div classname="btn-group">
          <p></p>
          <Link to="/codigo" className="btn btn-primary boton_separacion">
            Enviar Código
          </Link>
        </div>
      </div>
    </div>
  );
}
