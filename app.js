"use strict";

window.addEventListener('load', cargar);

function cargar(){
  let form = document.getElementById("id_formulario");
  let nombre = document.getElementById("nomb");
  let apellidos = document.getElementById("apellidos");
  let edad = document.getElementById("edades");
  let domicilio = document.getElementById("direccion");
  let nacion = document.getElementById("list-paises");
  let tel = document.getElementById("cel");



  form.addEventListener("submit", verificar_todo, false);
}

function verificar_todo(event){
  event.preventDefault();
  let comodin = true,
  elementos = this.elements,
  total = elementos.length;
    
  for (let i = 0; i < total; i++){
    if (!elementos[i].value.length){
      alert ("Debes de ingresar el " + elementos[i].name);
      elementos[i].focus();
      comodin = false;
      break;
    }
  }
    
  if (comodin) this.submit();
}

function crear_contacto(nombres, apellidos, edad, sexo, dir, nacion, tel){
  let colNombre = document.createElement("td");
  let colApellido = document.createElement("td");
  let colEdad = document.createElement("td");
  let colSexo = document.createElement("td");
  let colDir = document.createElement("td");
  let colNacion = document.createElement("td");
  let colTel = document.createElement("td");

  let btEliminar = document.createElement("button");
  let btEditar = document.createElement("button");
  let colOpc = document.createElement("td");
  colOpc.appendChild(btEliminar);
  colOpc.appendChild(btEditar);

  let fila = document.createElement("tr");
  fila.appendChild(colNombre);
  fila.appendChild(colApelllido);
  fila.appendChild(colEdad);
  fila.appendChild(colSexo);
  fila.appendChild(colDir);
  fila.appendChild(colNacion);
  fila.appendChild(colTel);
  fila.appendChild(colOpc);

  document.getElementById("cuerpo_tabla").appendChild(fila);

}
