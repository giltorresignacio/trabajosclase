//El usuario debe introducir su nombre
//Al introducir su nombre debe darle al botón para poder entrar al juego
//La pagina debe guardar al nombre de la persona
function nombreJugador (){
    let jugador= document.getElementById("nombre").value;
    //console.log('mi nombre es' + jugador);
    localStorage.setItem("jugador", jugador);
    location.href="juego.html";
    }