import React from "react";
import "./pages/style/styles.css";
import registrarse from "./pages/registrarse";
import { Link } from "react-router-dom";

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
          <p></p>
          <Link to="/iniciarsesion" className="btn btn-primary">
            Iniciar sesión
          </Link>
        </div>
        <p></p>
        <div classname="btn-group">
          <Link to="/registrarse" className="btn btn-primary">
            Registrarse
          </Link>
        </div>
        <registrarse />
        <p></p>
      </div>
      <h6>Todos los campos con (*) son obligatorios</h6>
      <Link to="/notificacion" className="btn btn-primary">
        Ejemplo de notificación
      </Link>
      <p />
      <button class="boton1"></button>
    </div>
  );
}
