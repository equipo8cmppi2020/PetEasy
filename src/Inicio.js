import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import iniciar_sesion from "../components/iniciar_sesion";
import { Button } from "react-bootstrap";
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
      <Router>
        <div classname="container">
          <div classname="btn-group">
            <button class="boton_inicio">
              <Link to="/iniciar_sesion">Iniciar Sesión</Link>
            </button>
          </div>
          <Switch>
            <Route path="/iniciar_sesion" exact>
              <iniciar_sesion />
            </Route>
          </Switch>
          <p></p>
          <div classname="btn-group">
            <button class="boton_registro">
              <Link to="/registrarse">Registrarse</Link>
            </button>
          </div>
          <Switch>
            <Route path="/registrarse" exact>
              <registrarse />
            </Route>
          </Switch>
          <p></p>
        </div>
      </Router>
      <h6>Todos los campos con (*) son obligatorios</h6>
    </div>
  );
}
