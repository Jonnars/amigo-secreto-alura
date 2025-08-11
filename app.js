// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // almacenar nombre de amigos

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value; // Obtiene el valor del campo de entrada
    
    if (nombre === '') { // Verifica si el campo está vacío
        alert('Por favor, ingresa un NOMBRE.');
        return;
    }
    
    amigos.push(nombre); // Agrega el nombre al array de amigos
    
    let lista = document.getElementById('listaAmigos'); // Selecciona el elemento de la lista
    lista.innerHTML = ''; 
    
    for (let i = 0; i < amigos.length; i++) {// Itera sobre el array de amigos
        // Agrega cada amigo a la lista HTML
        lista.innerHTML += `<li>${amigos[i]}</li>`; 
    }
    
    document.getElementById('amigo').value = ''; // Limpia el campo de entrada
}

function sortearAmigo() { // Verifica si hay al menos dos amigos para el sorteo
    if (amigos.length < 2) {
        alert('Necesitas al menos DOS AMIGOS para el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Indice aleatorio basado en la longitud del array de amigos
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo secreto es: <b>${amigoSecreto}</b>`; // Muestra el resultado del sorteo

    // Limpia la lista de amigos después del sorteo
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = ''; // Limpia la lista de amigos
    document.getElementById('resultado').innerHTML = ''; // Limpia el resultado del sorteo
}