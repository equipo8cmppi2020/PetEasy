import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
export default function creacion_alerta() {
  return (
    <div className="App">
      <img src="https://i.imgur.com/7fwdOF7.png" alt="" height="380px" />
      <p />
      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
      <p />
      <button class="boton1"></button>
    </div>
  );
}
