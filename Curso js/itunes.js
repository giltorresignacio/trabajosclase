const URL_ITUNES = "https://itunes.apple.com/search?media=music&term="
let xhr = new XMLHttpRequest();

function buscar ()
{
    let busqueda = document.getElementById("textobusqueda").value;
    console.log("Vamos a buscar: " + busqueda);
    let url = URL_ITUNES+busqueda;
    //TODO Normalizar la URL para codificar corretamente espacios, tildes
    console.log("URL solicitada " + url);
    xhr.open("GET", url);
    xhr.onreadystatechange=recibirDatosCanciones;
    xhr.send();

}
function  mostrarCancion (info)
{
    console.log(info);
    let cancion=info.trackName + info.artistName;
    let div_canciones=document.getElementById("canciones");
    let parrafo= document.createElement("p");
    parrafo.innerHTML="nombre: " + info.trackName;
    div_canciones.appendChild(parrafo);

    
    console.log(cancion);
    
    //TODO mostrar la canción en el HTML (div)
}
function recibirDatosCanciones ()
{
    if (xhr.readyState==4)
    {
        console.log("HEmos recibido la respuesta");
        if (xhr.status==200)
        {
            console.log("La respuesta es buena");
            let info_canciones_json = xhr.responseText;
            let info_canciones = JSON.parse(info_canciones_json);
            //let cancion=info_canciones.results[0].trackName + info_canciones.results[0].artistName;
            //console.log(cancion);
            //mostrarCancion(info_canciones);
            console.log("Num canciones = " +info_canciones.resultCount); 
            console.log("ID artista 0 = " +info_canciones.results[0].artistId); 
            //mostrar todos los ids de los artistas
            for (let i=0;i<info_canciones.results.length;i++)
            {
                //console.log("ID artista  " + i + " = " +info_canciones.results[i].artistId);
                console.log(info_canciones.results[i]);
                mostrarCancion(info_canciones.results[i]);
            }
        }
    }
}