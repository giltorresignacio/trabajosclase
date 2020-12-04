//LO PRIMERO QUE QUEREMOS ES QUE INGRESE SU ALTURA EN METROA Y SU PESO EN KG
//LA VARIABLE REALIZA LA DIVISIÓN DE EL PESO/ENTRE LA ALTURA AL CUADRADO
    //SI IMC<16 IMC DESNUTRIDO
    //SI IMC>=16 Y <18 imc DELGADO
    //SI IMC>=18 y <25 IMC IDEAL
    //SI IMC>=25 y <31 IMC SOBREPESO
    //SI IMC>31 IMC OBESO
//AL CARCULARLO, DARLE SU IMC NUMERICO Y NOMINAL JUNTO A IMAGEN
function pesoPersona()
{
    let peso= document.getElementById("peso").value;
    console.log("el peso es" + peso)
    let altura=document.getElementById("altura").value;
    console.log("la altura es" + altura)
    let imc= (peso/Math.pow(altura, 2));
    console.log("el imc es" + imc)
        
    
}
function resumenFinal(imc){
    if(imc<16)
        console.log("estas en los huesos")
}