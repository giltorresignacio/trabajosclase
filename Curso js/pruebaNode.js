//let resultado = 5 +2 ;
//console.log(resultado);
//funcion de flecha y dolar

/**
 * then(data,data 2) => //dtata ya es el json
 * function sinnombre(data, data2){
 * console.log("llamar a mostrarPerro");
 * mostrarPerro(data);}
 * 
 * 
 */

let fsaludo2 = fsaludo2 (h);
{
     let saludo = " "
     if (hora<=5){
         saludo = "no me jodas";
     }
     else if(hora>=6 && hora <=11){
         saludo="buenos días";
     }
     else if (hora >=12 && hora <= 18)
     {saludo="buenas tardes"}
     else {saludo="buenas noches"}
     return "saludo a las "+ hora + " " + saludo;

 };
 let fecha = new Date();//obetener la fecha y la hora actual
 let h = fecha.getHours();//obetengo la hora actual
 let saludo = fsaludo(h);
 console.log(saludo)


 let arraynumero = [1,2,3,4,5];
 //si necesito procesar todos los elementos map() me ayuda
 let arraydoble = arraynumero.map(numero => numero*2);
 console.log (arraynumero);
 console.log (arraydoble);

