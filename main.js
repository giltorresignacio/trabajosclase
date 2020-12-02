/* var edad= 0;
edad= window.prompt("ingrese su edad por favor");
function mayoriaEdad () {
    if(edad>=18)
        window.alert("mayor de edad");
    else
        window.alert("menor de edad");  
}

a() */
const MAYORIA_DE_EDAD = 18;
function informarMayoriaEdad() {}
    console.log("ha tocado el botón")
    //recoger valor caja de texto  
    var caja_edad = document.getElementById("edad");//let 
    console.log("El id de la caja es" +caja_edad.id);//concatenar
    console.log("El valor de la caja es" +caja_edad.value);//concatenar
    var edad= caja_edad.value;//obtengo el valor
    //validar si es un nº o palabra
    //si es texto 
        //error entrada
    //si es nº  
        //comparar con limite de edad 
        if (edad >= MAYORIA_DE_EDAD)
        { 
            console.log("Es Mayor de edad")
        }
        {
            console.log("Es Menor de edad")
        }
        //si es mayor indicarlo y si es menor informar menor
