onload=mostrarTablaResultados;



let tabla;
let array_partidas=null;

function mostrarTablaResutados (){
    let array_partidas_json= localStorage.getItem("partidas")
        if(array_partidas_json!=null){
            console.log("hay cosas para mostrar")
            array_partidas = JSON.parse(array_partidas_json);
            tabla = document.getElementById("tabla");
            mostrarTabla(array_partidas)
        }else{
            console.log("No hay nada que mostrar");
        }
}
function mostrarTabla(array_partidas){
    for(partida of array_partidas){
        mostrarPartida(partida);
    }
}
function mostrarPartida (partida){
    let tdnombre = document.createElement("td");
    let tdintentos = document.createElement("td");
    tdnombre.innerHTML = partida.jugador;
    tdintentos.innerHTML = partida.partidas;
    let nuevaflia = document.createElement("tr");
    nuevaflia.appendChild(tdnombre);
    nuevaflia.appendChild(tdintentos);
    tabla.appendChild(nuevafila);
}
function borrarTabla() {
    let filas= tabla.childNodes;
    for (var i = filas.length-1; i > 1; i--){
        filas [i].remove()
    }
}
function repintarArray()
{
    borrarTabla();
    mostrarTabla(array_partidas);
}

function sortPorNombre ()
{
    array_partidas.sort (ordenarPorNombre);
    repintarArray();
}

function sortPorIntentos ()
{
    array_partidas.sort (ordenarPorIntentos);
    repintarArray();
}

function ordenarPorNombre (partida1, partida2)
{
    let resultado = 0;

       resultado = partida1.nombre.localeCompare(partida2.nombre);

    return resultado;
}

function ordenarPorIntentos (partida1, partida2)
{

    let resultado = 0;

        resultado = partida1.intentos-partida2.intentos;

    return resultado;

}
