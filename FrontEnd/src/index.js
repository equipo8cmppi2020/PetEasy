import React from "react";
import ReactDOM from "react-dom";
import Aplicacion from "./pages/Aplicacion";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>,
  rootElement
);
function obtenerDatos() {
  fetch("")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuesta) {
      var nombre = document.getElementById("nombre");
      var imagen = document.getElementById("imagen");
      imagen.innerHTML = respuesta.imagen;
      nombre.innerHTML = respuesta.nombre_mascota;
    });
}
