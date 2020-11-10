import React from "react";
import "./style/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>
        <h5>PetEasy</h5>
        <img
          src="https://i.imgur.com/rVTvJoV.png"
          alt=""
          classname=""
          width="150"
          height="150"
        />
      </h1>
      <h4>Horario de alimentacion</h4>
      <div classname="container">
        <div classname="btn-group">
          <Link to="/alimentacion" className="btn btn-primary boton_separacion">
            Editar horario
          </Link>
        </div>
        <h4>Horario de baño</h4>
        <div classname="btn-group">
          <Link to="/bano" className="btn btn-primary boton_separacion">
            Editar horario
          </Link>
        </div>
        <p />
        <Link to="/lista" className="btn btn-primary boton_separacion">
          Volver
        </Link>
        <Link to="horarios" className="btn btn-primary boton_separacion">
          Editar lista
        </Link>
        <p />
        <Link to="alimentacion" className="btn btn-primary boton_separacion">
          Agregar horario
        </Link>
        <p />
        <p></p>
      </div>
    </div>
  );
}
