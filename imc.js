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
    console.log("el peso es" +" " + peso)
    let altura=document.getElementById("altura").value;
    console.log("la altura es" + " " + altura)
    var imc= Math.round(peso/Math.pow(altura, 2)*100)/100;
    console.log("el imc es" + " " + imc);
    imcf.innerHTML = imc
    
    if(imc<16)
    //console.log("estas desnutrido")
    resumen.innerHTML = "estas desnutrido"
    else if(imc>=16 && imc<18) 
    //console.log("estas delgado")
    resumen.innerHTML = "estas delgado"
    else if(imc>=18 && imc<25)
    //console.log("su imc es ideal")
    resumen.innerHTML = "Su imc es ideal"
    else if(imc>=25 && imc<31)
    //console.log("su imc es sobrepeso")
    resumen.innerHTML= "Tienes sobrepeso"
    else if(imc>=31)
    //console.log("su imc es obeso")
    resumen.innerHTML= "Estas obeso"
    
}