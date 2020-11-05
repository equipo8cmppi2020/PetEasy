import React from "react";
import "./styles.css";

export default function formulario_agregar_mascota() {
  return (
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
      <button class="">Agregar imagen</button>
      <br></br>
      <p></p>
      Nombre de la mascota<br></br>
      <textarea class="textbox_formulario">
        Inserte el nombre de su mascota aquí
      </textarea>
      <br></br>
      <p></p>
      <select classname="tipo_mascotas" name="Mascota">
        <option value="1">Tipo de Mascota</option>
        <option value="2">Perro</option>
        <option value="3">Gato</option>
        <option value="10">Loro</option>
        <option value="11">Hamster</option>
        <option value="12">Pez</option>
      </select>
      """"
      <select name="Raza">
        <option value="1">Raza</option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="10"></option>
        <option value="11"></option>
        <option value="12"></option>
      </select>
      <br></br>
      <p></p>
      <input type="checkbox" class="checkbox"></input>Horario de alimentación{" "}
      <br></br>
      <input type="checkbox" class="checkbox"></input>Horario de baño <br></br>
      <p></p>
      <button class="boton_inicio_formulario">Agregar mascota</button>
      <button class="boton_inicio_formulario">Volver</button>
    </div>
  );
}

