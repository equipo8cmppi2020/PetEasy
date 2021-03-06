import React from "react";
import "./style/styles.css";
import { Link } from "react-router-dom";
function guardarmascota(event) {
  event.preventDefault();
  var formData = new FormData();
}
export default function formulario_agregar_mascota() {
  return (
    <form onSubmit={guardarmascota}>
      <div className="App">
        <h1>
          <img
            src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png"
            alt=""
            border="1px"
            classname=""
            width="230"
            height="230"
          />
        </h1>
        <form action="/doble-input" method="post" enctype="multipart/form-data">
          <input type="file" name="fichero" />
          <p />
          <button type="submit">Enviar</button>
        </form>
        <p />
        Nombre de la mascota<br></br>
        <div classname="container" />
        <div classname="btn-group">
          <input type="text"></input>
        </div>
        <p></p>
        <select classname="tipo_mascotas" name="Mascota">
          <option value="1">Tipo de mascota</option>
          <option value="2">Perro</option>
          <option value="3">Gato</option>
          <option value="4">Loro</option>
          <option value="5">Hamster</option>
          <option value="6">Pez</option>
        </select>
        """"
        <select name="raza">
          <option value="7">Raza</option>
          <option value="8">Chihuahua</option>
          <option value="9">Yorkshire</option>
          <option value="10">Pomeranian</option>
          <option value="11">Bullterrier</option>
          <option value="12">Bulldog Francés</option>
        </select>
        <br></br>
        <p></p>
        <input type="checkbox" class="checkbox"></input>Horario de alimentación{" "}
        <br></br>
        <input type="checkbox" class="checkbox"></input>Horario de baño{" "}
        <br></br>
        <p></p>
        <Link to="/lista" className="btn btn-primary boton_separacion">
          Agregar mascota
        </Link>
        <Link to="/inicio" className="btn btn-primary boton_separacion">
          Volver
        </Link>
      </div>
    </form>
  );
}
