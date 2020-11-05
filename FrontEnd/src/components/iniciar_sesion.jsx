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
      <button class="recordarcontraseña">Olvidé mi contraseña</button>
      <p></p>


      <Link to="/registrarse" className="btn btn-primary boton_inicio">
          Registrarse
            </Link>
      <button class="boton_inicio">Volver</button>
    </div>
  );
}

