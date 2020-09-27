import React from "react";
import "./styles.css";

export default function App() {
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
      <div type="button" class="boton_inicio">Iniciar Sesión</div>
      <p></p>
      <div type="button" class="boton_registro">
        Registrarse
      </div>
      <p></p>
      <h6>Todos los campos con (*) son obligatorios</h6>
    </div>
  );
}
