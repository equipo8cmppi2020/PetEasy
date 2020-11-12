import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
import App from "../App";
export default function lista_mascotas() {
  return (
    <div className="App">
      <h5>PetEasy</h5>
      <h1>
        <img
          src="https://i.imgur.com/rVTvJoV.png"
          alt=""
          classname=""
          width="130"
          height="130"
        />
        <p />
      </h1>
      <img
        src="https://i.pinimg.com/564x/e1/7e/13/e17e13c695f6c35d4756d7da29b6bf7f.jpg"
        class="foto"
        width="100px"
        height="100"
      />{" "}
      Paco
      <button
        className="btn btn-primary boton_separacion2 btn2"
        onClick={() =>
          window.confirm("Estás seguro que deseas eliminar esta mascota? ")
        }
      >
        {" "}
        Eliminar{" "}
      </button>
      <p />
      <Link to="/lista" className="btn btn-primary boton_separacion">
        Cancelar
      </Link>
    </div>
  );
}
