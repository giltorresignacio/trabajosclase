//Primero introducimos el numero del DNI
//validamos si es un numero o si son palabras que no nos valdrian
//si es con letras 
    //datos mal introducidos
//si son nºs
    //se realiza la división del nº introducido y se %23
    //el resto de la % se compara con la cadena de letras y se remplaza
    //se da el numero 
    function averigua(){
        cadena="TRWAGMYFPDXBNJZSQVHLCKE"
        posicion= formulario.dni.value%23
        letra= cadena.substring(posicion,posicion+1)
        document.formulario.dni.value= formulario.dni.value+"-"+letra
        }