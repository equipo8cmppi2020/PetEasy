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
          width="180"
          height="180"
        />
      </h1>
      <input type="image" src="agg.png" height="70px" />
      Agregar mascotas<h6></h6>
      <Router>
        <div classname="container">
          <div classname="btn-group">
            <button class="boton_mascotas">
              <Link to="/mascotas">Mis mascotas</Link>
            </button>
          </div>
          <p></p>
          <div classname="btn-group">
            <button class="boton_cerrar">
              <Link to="/iniciar">Cerrar Sesión</Link>
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
    </div>
  );
}
