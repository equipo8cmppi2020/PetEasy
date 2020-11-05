import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registrarse from "./registrarse";
import App from "../App";
import iniciarsesion from "./iniciar_sesion";
import inicio from "./inicio";
import formulario from "./formulario_agregar_mascota";
import lista from "./lista_mascotas";
import correo from "./recuperarcontrasena_correo";
import codigo from "./recuperarcontrasena_codigo";
function Aplicacion() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/app" component={App} />
        <Route exact path="/iniciarsesion" component={iniciarsesion} />
        <Route exact path="/registrarse" component={registrarse} />
        <Route exact path="/inicio" component={inicio} />
        <Route exact path="/formulario" component={formulario} />
        <Route exact path="/lista" component={lista} />
        <Route exact path="/correo" component={correo} />
        <Route exact path="/codigo" component={codigo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Aplicacion;
