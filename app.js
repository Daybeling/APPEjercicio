var form = document.getElementById("id_formulario");

form.addEventListener("submit", function(event){
  event.preventDefault();
  var comodin = true,
  elementos = this.elements,
  total = elementos.length;
  
  for (var i = 0; i < total; i++){
    if (!elementos[i].value.length){
      alert ("Debes de ingresar el " + elementos[i].name);
      elementos[i].focus();
      comodin = false;
      break;
    }
  }
  
  if (comodin){
    this.submit();
  }
}, false);