import React from "react";
import "./style/styles.css";

export default function creacion_alerta() {
  return (
    <div className="App">
      <h1>Tipo de Alerta*</h1>
      <select classname="tipo_de_alerta" name="tipo_alerta">
        <option value="1">Alimentación</option>
        <option value="2">Baño</option>
      </select>
      <br></br>
      <p></p>
      <select classname="hora_de_alerta" name="hora_alerta">
        <option value="1">am</option>
        <option value="2">pm</option>
      </select>
      <br></br>
      <p></p>
      <button class="boton_inicio_horario">Volver</button>
      <button class="boton_inicio_horario">Guardar Cambios</button>
    </div>
  );
}
