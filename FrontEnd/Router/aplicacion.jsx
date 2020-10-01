import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../src/App";

function Aplicacion() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/iniciar_sesion" component={App} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Aplicacion;
