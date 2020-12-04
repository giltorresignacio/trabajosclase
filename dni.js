//Primero introducimos el numero del DNI
//validamos si es un numero o si son palabras que no nos valdrian
//si es con letras 
    //datos mal introducidos
//si son nºs
    //se realiza la división del nº introducido y se %23
    //el resto de la % se compara con la cadena de letras y se remplaza
    //se da el numero 
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

function calcularLetraDni ()
{
    console.log ("Ha introducido un dni");
    //tenemos que obtener el dni introducido
    var dni = document.getElementById("dni").value;
    console.log ("Ha introducido " + dni);
    var dni_numerico = parseInt(dni);
    console.log ("Ha introducido " + dni_numerico +  " " + typeof dni_numerico);
    let el_sel=document.querySelector('[name="prefijo"]:checked')
    console.log("letra = " +el_sel.value)
    var dni_final= prepararNumero (el_sel.value, dni);
    var resto = (dni_final % 23);
    console.log ("Resto " + resto);
    var letradni = LETRAS_DNI.charAt(resto);
    console.log ("Tu letra es " + letradni);
    mostrarResultado (letradni) }

    function mostrarResultado(letra_resultado)
    {
        //CREAR UN NUEVO ELEMENTO 
        var nuevo_elemento_div = document.createElement("div");
        nuevo_elemento_div.innerHTML="tu letra es" + letra_resultado;
        var etiqueta_body = document.getElementById("cuerpo");
        etiqueta_body.appendChild(nuevo_elemento_div);
        //si existe el div
            //actualizar inner

        //si no
            //crear el div
            //actualizar el inner
        let el_div=document.querySelector('div');

        if(el_div==null) {
            el_div = document.createElement("div");
            var etiqueta_body = document.getElementById("cuerpo")
             etiqueta_body.appendChild(el_div);
             console.log("div creado")
        } el_div.innerHTML="Tu letra es" + letra_resultado;
       
    

    var nuevo_elemento_div = document.createElement("div");
    nuevo_elemento_div.innerHTML="Tu letra es " + letra_resultado;
    //Y AÑADIRLO AL HTML
    var etiqueta_body = document.getElementById("cuerpo");
    etiqueta_body.appendChild(nuevo_elemento_div);
    }


        
    function prepararNumero(letra,numero) 
    {
        let dni_num= '';
            console.log("TIPO NUMERO=" +typeof numero )
            dni_num= letra+numero

        return dni_num;
    }