import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h5>PetEasy</h5>
      <h1>
        <img
          src="https://i.imgur.com/rVTvJoV.png"
          alt=""
          classname=""
          width="180"
          height="180"
        />
      </h1>
      <Router>
        <div classname="container">
          <h5>Correoelectronico*</h5>
          <div classname="btn-group">
            <input type="text"></input>
          </div>
          <div classname="btn-group">
            <p></p>
            <button class="boton_Codigo">
              <Link to="/Codigo">Enviar Código</Link>
            </button>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default recuperarcontraseña_correo;
