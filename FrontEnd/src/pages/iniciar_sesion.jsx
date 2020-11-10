import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
export default function iniciar_sesion() {
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
      <h5 class="textreference">Correo*</h5>
      <p></p>
      <textarea class="textbox">Inserte su correo aquí</textarea>
      <p></p>
      <h5 class="textreference">Contraseña*</h5>
      <p></p>
      <textarea class="textbox">Inserte su contraseña aquí</textarea>
      <p></p>
      <input type="checkbox" class="checkbox"></input>Recordarme{" "}
      <Link to="/correo" className="recordarcontraseña">
        Olvidé mi contraseña
      </Link>
      <p></p>
      <Link to="/inicio" className="btn btn-primary boton_separacion">
        Iniciar Sesión
      </Link>
      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </div>
  );
}
