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
    
    if(imc<16){
    resumen.innerHTML = '<h2>Estas desnutrido</h2> <img src="trabajosclase/imagenes/desnutrido.jpg" width=300px></img>'}
    else if(imc>=16 && imc<18){ 
    resumen.innerHTML = '<h2>Estas delgado</h2> <img src="trabajosclase/imagenes/deslago.jpg"width=300px></img>'}
    else if(imc>=18 && imc<25){
    resumen.innerHTML = '<h2>Su imc es ideal </h2> <img src="trabajosclase/imagenes/ideal.webp" width=300px> </img>'}
    else if(imc>=25 && imc<31){
    resumen.innerHTML= '<h2> Tienes sobrepeso </h2> <img src="trabajosclase/imagenes/gordo.jpg" width=300px> </img>'}
    else if(imc>=31){
    resumen.innerHTML= '<h2>Estas obeso </h2> <img src="trabajosclase/imagenes/obeso.jpg" width=300px> </img>'}
    
}