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
      <h5 class="textreference">Correo*</h5>
      <p></p>
      <textarea class="textbox">Inserte su correo aquí</textarea>
      <p></p>
      <h5 class="textreference">Contraseña*</h5>
      <p></p>
      <textarea class="textbox">Inserte su contraseña aquí</textarea>
      <p></p>
      <h5 class="textreference">Confirmar contraseña*</h5>
      <p></p>
      <textarea class="textbox">Confirme su contraseña aquí</textarea>
      <p></p>
      <button class="boton_registro">Registrarse</button>{" "}
      <button class="boton_registro">Volver</button>
    </div>
  );
}
export default registrarse;
