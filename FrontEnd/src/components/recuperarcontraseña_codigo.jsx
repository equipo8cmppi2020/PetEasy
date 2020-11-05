import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function recuperarcontraseña_codigo() {
  return (
    <div className="RECUPERAR">
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
          <h5>Ingresar el codigo*</h5>
          <div classname="btn-group">
            <input type="text"></input>
          </div>
          <div classname="btn-group">
            <p></p>
            <button class="boton_Codigo2">
              <Link to="/Codigo">Validar Codigo</Link>
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
