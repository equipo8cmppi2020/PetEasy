import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
import registrarse from "../pages/registrarse";
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
      <Link to="/formulario" className="btn btn-primary">
        Agregar Mascota
      </Link>
      <p></p>
      <div classname="container">
        <div classname="btn-group">
          <Link to="/lista" className="btn btn-primary">
            Lista de Mascotas
          </Link>
        </div>
        <p></p>
        <div classname="btn-group">
          <Link
            to="/"
            className="btn btn-primary"
            onClick={() =>
              window.confirm("Estás seguro que deseas eliminar esta mascota? ")
            }
          >
            Cerrar Sesión
          </Link>
        </div>
        <registrarse />
        <p></p>
      </div>
    </div>
  );
}
