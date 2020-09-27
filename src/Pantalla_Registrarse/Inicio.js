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
      <button class="boton_inicio">Iniciar Sesión</button>
      <p></p>
      <button class="boton_registro">Registrarse</button>
      <p></p>
      <h6>Todos los campos con (*) son obligatorios</h6>
    </div>
  );
}
