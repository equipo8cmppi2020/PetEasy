import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>
        <img
          src="https://i.imgur.com/rVTvJoV.png"
          alt=""
          classname=""
          width="150"
          height="150"
        />
      </h1>
      <h4>Horario de alimentacion</h4>
      <Router>
        <div classname="container">
          <div classname="btn-group">
            <button class="btn_edthralimen">
              <Link to="">Editar horario</Link>
            </button>
          </div>
          <h4>Horario baño</h4>
          <p></p>
          <div classname="btn-group">
            <button class="btn_edthrbaño">
              <Link to="">Editar horario</Link>
            </button>
          </div>
          <button class="btn_vuelve">
            <Link to="">Volver</Link>
          </button>

          <button class="btn_aggho">
            <Link to="">Agregar horario</Link>
          </button>
          <p></p>
        </div>
      </Router>
    </div>
  );
}
