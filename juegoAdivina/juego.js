this.onload = carga;
const NUM_INTENTOS = 5;
let numeroEntero
let num_intentos//SIN PARENTESIS programa el listtener vs CON parentesis llama en ese momento
let arraynumeros= [];
function carga() {
    let value = localStorage.getItem("jugador")
    let container = document.getElementById("player")
    container.value = value;
    container.innerHTML = value;
    let numero_vidas = document.getElementById("vidas");
    numero_vidas.innerHTML = 5;
    let min = 1;
    let max = 100;
    let numeroDecimales = Math.random() * (max - min) + min;
    console.log("el numero aleatorio es" + numeroDecimales)
    numeroEntero = Math.round(numeroDecimales);
    console.log("el numero final es" + numeroEntero)
    num_intentos = 0;
}
function comprobarIntento() {
    let jugador = document.getElementById("numero").value;
    if (arraynumeros==null){
        arraynumeros={jugador};
    }
    else{arraynumeros.push(jugador);}
    console.log(arraynumeros);
    arraynumeros.sort(function(a,b){return a - b;});
    console.log(arraynumeros);
    console.log("el numero del jugador es" + jugador)
    if (jugador == numeroEntero) {
        intento.innerHTML = '<h2>HAS GANADO!!!</h2> <img src="https://media1.tenor.com/images/39afcd79d4c010f595e59a670028984b/tenor.gif?itemid=15092417" width=600px></img>';

    }
    else if (jugador < numeroEntero) {
        intento.innerHTML = '<h3>El número tiene que ser MAYOR</h3>';
        num_intentos++;
        document.getElementById("vidas").innerHTML = NUM_INTENTOS - num_intentos;

    }
    else {
        intento.innerHTML = '<h3>El número tiene que ser MENOR<h3>';
        num_intentos++;
        document.getElementById("vidas").innerHTML = NUM_INTENTOS - num_intentos;

    }
    if (num_intentos == NUM_INTENTOS) {
        document.getElementById("perdedor").innerHTML = "Has perdido :(. Buscabamos el" + " " + numeroEntero
        intento.innerHTML = '<img src="https://media.tenor.com/images/4b3856159b505202ad0a38b512b50166/tenor.gif" width=600px ></img>'
        console.log("SACABAO")


    }
    nombre_jugador=localStorage.getItem("jugador")
    party= new Partida(num_intentos,nombre_jugador)
    console.log(party.mostrarPartida)
    
  }
function primeraPagina() {
    location.href = "inicioJuego.html";
}
function jugarDeNuevo () {
    location.href = "juego.html";
    
}

class Partida{
        costructor(intentos,quienjuega){
            this.intentos=intentos;
            this.quienjuega=quienjuega;
        }
        
    get mostrarPartida() {
        console.log("el jugador" + this.quienjuega + "lo ha intentado en" + this.intentos);
        }
    
} 
//TODO
//definir una CLASE partida
//que contenga el nombre de usuario
//y el nº de intentos que ha obtenido al jugar 
//una vez definida la clase, debeis construir
//un objeto de partida y llamar a una función
//mostratPartida -dentro de la clase - que nos imprima la indormacion de la partida
//quien ha jugado y cuantos intentos ha empleado 





