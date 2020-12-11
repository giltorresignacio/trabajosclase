this.onload= carga;
const NUM_INTENTOS=5;
let numeroEntero 
let num_intentos//SIN PARENTESIS programa el listtener vs CON parentesis llama en ese momento
        function carga() {
            let value = localStorage.getItem("jugador")
            let container=document.getElementById("player")
            container.value=value;
            container.innerHTML=value;
            let numero_vidas = document.getElementById("vidas");
         numero_vidas.innerHTML= 5;
            let min= 1;
            let max=100;
            let numeroDecimales = Math.random()*(max - min) + min;
            console.log("el numero aleatorio es" + numeroDecimales)
            numeroEntero= Math.round(numeroDecimales);
            console.log("el numero final es" + numeroEntero)
            num_intentos=0;
        }
        function comprobarIntento (){
            let jugador=document.getElementById("numero").value;
            console.log("el numero del jugador es" + jugador)
                if(jugador==numeroEntero){
                    intento.innerHTML='<h2>HAS GANADO!!!</h2> <img src="https://media1.tenor.com/images/39afcd79d4c010f595e59a670028984b/tenor.gif?itemid=15092417" width=600px></img>';
                    
                }
                else if(jugador<numeroEntero){
                    intento.innerHTML='<h3>El número tiene que ser MAYOR</h3>';
                    num_intentos ++;
                    document.getElementById("vidas").innerHTML=NUM_INTENTOS - num_intentos;
                    
                }
                else{
                    intento.innerHTML='<h3>El número tiene que ser MENOR<h3>';
                    num_intentos++;
                    document.getElementById("vidas").innerHTML=NUM_INTENTOS - num_intentos;
                    
                }
                if(num_intentos==NUM_INTENTOS)
                    {
                        document.getElementById("perdedor").innerHTML="Has perdido :(. Buscabamos el" + " " + numeroEntero 
                        intento.innerHTML='<img src="https://media.tenor.com/images/4b3856159b505202ad0a38b512b50166/tenor.gif" width=600px ></img>'
                        console.log("SACABAO")
                        
                        
                    }
                    
            
            



            
            }
            
           
            

        

            