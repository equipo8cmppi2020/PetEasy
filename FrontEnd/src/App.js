import React from "react";
import "./styles.css";
import registrarse from "../components/registrarse";
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
      <div classname="container">
        <div classname="btn-group">
          <button class="boton_inicio"></button>
        </div>
        <p></p>
        <div classname="btn-group">
          <button class="boton_registro"></button>
        </div>
        <registrarse />
        <p></p>
      </div>
      <h6>Todos los campos con (*) son obligatorios</h6>
    </div>
  );
}
