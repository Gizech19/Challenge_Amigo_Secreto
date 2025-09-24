// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
  document.getElementById("amigo").focus();  // <- Esto devuelve el cursor al input
  asignarTextoElemento("h2", "Digite el nombre de sus amigos");
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function agregarAmigo() {
  let amigoIngresado = document.getElementById("amigo").value;

  if (amigoIngresado == "" || /\d/.test(amigoIngresado)) {
    alert("Por favor, inserte un nombre.");
    limpiarCaja();
  } else {
    amigos.push(amigoIngresado);
    limpiarCaja();
    actualizaListaAmigos();
  }
}

function actualizaListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  //Limpiar la lista antes de agregar nuevos elementos

  listaAmigos.innerHTML = "";
  //Recorrer el arreglo amigos y crear un <li> por cada nombre

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  let nombreSorteado= document.getElementById("resultado");
  nombreSorteado.innerHTML = "";

  if (amigos.length === 0) {
    alert("La lista esta vacia, Agregue al menos un amigo");
  } else {
    //Sorteamos el indice con math. y lo almacenamos en una variable
    let nombreSorteadoIndice = Math.floor(Math.random() * amigos.length);
    
    //Mostramos el amigo Sorteado accediendo mediante id a <ul> cyando presionamos el boton sortear amigo
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigos[nombreSorteadoIndice]}</strong>`;
    //Eliminamos el amigo que ya se sorteo con el metodo Splice donde ponemos la variable donde se guardo el indice sorteado y despues ponemos uno, para que solo nos elimine el indice que queremos

    amigos.splice(nombreSorteadoIndice, 1);
    //Lamamos a la Funcion actualizaListaAmigos(); para reiniciar los amigos sorteados y volvemos a mostrarlos ya eliminado 
    //el amigo sorteado anteriormente y comprobamos si la cadena quede vacia para que el usuario reinicie el juego
    actualizaListaAmigos();
    

    if (amigos.length === 0) {
      asignarTextoElemento("h2","¡Juego terminado! Reinicie para volver a comenzar(F5)");

      document.querySelector('#añadir').setAttribute('disabled','true');
      document.querySelector('#sortearAmigo').setAttribute('disabled','true');
    }
  }
}
