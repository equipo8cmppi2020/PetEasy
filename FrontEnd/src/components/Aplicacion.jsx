import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registrarse from "./registrarse";
import App from "../App";
import iniciarsesion from "./iniciar_sesion"
function Aplicacion() {
  return (
    <BrowserRouter>
 
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/iniciarsesion" component={iniciarsesion} />
          <Route exact path="/registrarse" component={registrarse} />
        </Switch>

    </BrowserRouter>
  );
}

export default Aplicacion;