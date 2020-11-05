import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
export default function lista_mascotas() {
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
      <Link to="lista" className="btn btn-primary boton_separacion">
        Editar lista
      </Link>
      <Link to="/inicio" className="btn btn-primary boton_separacion">
        Volver
      </Link>
    </div>
  );
}
