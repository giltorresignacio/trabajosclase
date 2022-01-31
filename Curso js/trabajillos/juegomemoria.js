const TIGRE = "&#129409;"
const BALON_FUTBOL = "&#9917;"

this.onload = iniciarTablero; //this es window

let div1;
let div2;
let primero=true;
let puntosGanar;
let puntosTotal= 0;

//TODO CONTROLAR EL FINAL DEL JUEGO
function tapar (casilla1, casilla2)
{
    
    casilla1.style.opacity = 0;//hago visible
    casilla2.style.opacity = 0;//hago visible

}

function comprobar ()
{
    //this es el elemento que ha recibido el evento
    console.log("ha tocado el div " + this.innerHTML);
    this.style.opacity = 1;//hago visible
    if (primero)
    {
         
        div1 = this;//me lo guardo
        primero = false;
    } else { //segundo caso

        if (div1.innerHTML!=this.innerHTML)
        {
            //son distintos, los tapo
            setTimeout(tapar, 900, this, div1);
        }else{
            let puntosTotal= puntosTotal+1;
            console.log(puntosTotal)
            if(puntosTotal=puntosGanar)
            window.alert="Enhorabuena has ganado"
            
            //han coincidido!
            //TODO CONTROLAR EL FINAL DEL JUEGO
            //SABER CON CUANTOS ACIERTOS ACABA EL JUEGO
            //IR CONTANDO LOS ACIERTOS Y CUANDO ALCACEMOS EL MAXIMO, 
            //SERÁ EL FINAL Y FELICITAMOS AL JUGADOR
        }
        primero = true;
    }
    

    //SI TOCO 1, Y ES EL PRIMERO --> DESTAPO
    //SINO, SI ES EL SEGUNDO QUE TOCO
        //ES EL MISMO QUE EL PRIMERO --> LOS DEJO DESTAPADOS
        //SON DISTINTOS EL 1 Y EL 2 --> TAPAR AMBOS
}

function iniciarTablero ()
{
    //COGER TODOS LOS DIVS Y HAACERLOS INVISIBLES
    let arrayDivs = document.querySelectorAll("div");
    let puntosGanar= arrayDivs.length/2;

    arrayDivs.forEach(i => i.style.opacity = 0);
    arrayDivs.forEach(i => i.addEventListener("click", comprobar));
        

}