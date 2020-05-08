const formulario = document.getElementById("formulario");
const buscarBtn = document.getElementById("buscarBtn");
const campoBusqueda = document.getElementById("campoBusqueda");
const resultados = document.getElementById("resultados");
const paginacion = document.getElementById("paginacion");

const apiURL = "https://api.lyrics.ovh";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

formulario.addEventListener("submit", e =>{
    e.preventDefault();
    const palabra = campoBusqueda.value.trim();
    if(!palabra)
        alert("Por favor, escriba la canción a buscar");
    else
        buscarCanciones(palabra);
})

async function buscarCanciones(palabra){
    const res =  await fetch(`${apiURL}/suggest/${palabra}`);
    const datos = await res.json();
    console.log(datos);
    mostrarDatos(datos);
}

function mostrarDatos(datos){
    let salida ="";

    datos.data.forEach( cancion  => {
        salida += `
        <li>
            <span><strong>${cancion.artist.name}</strong> - ${cancion.title} </span>
            <button class="btn" data-artist="${cancion.artist.name}" 
                data-songtitle="${cancion.title}">Ver Canción</button>
        </li>`
    });

    resultados.innerHTML = `
        <ul class="canciones">
            ${salida}
        </ul>`;
    
    if (datos.prev || datos.next){
        paginacion.innerHTML = ` ${datos.prev ? `<button class="btn" onclick="obtenerMasCanciones('${datos.prev}')">Atrás</button>` : ``}
        ${datos.next ? `<button class="btn" onclick="obtenerMasCanciones('${datos.next}')">Más</button>` : ``}`
    }
    else{
        paginacion.innerHTML="";
    }
}

async function obtenerMasCanciones(url){
    const res =  await fetch(corsAnywhere + url);
    const datos = await res.json();
    console.log(datos);
    mostrarDatos(datos);
}


// Get lyrics button click
resultados.addEventListener('click', e => {
    const clickedEl = e.target;
  
    if (clickedEl.tagName === 'BUTTON') {
      const artist = clickedEl.getAttribute('data-artist');
      const songTitle = clickedEl.getAttribute('data-songtitle');
  
      getLyrics(artist, songTitle);
    }
  });

// Get lyrics for song
async function getLyrics(artist, songTitle) {

    const url = `${apiURL}/v1/${artist}/${songTitle}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
  
     if (data.error) {
          resultados.innerHTML = data.error;
     } else {
          const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  
          resultados.innerHTML = `
              <h2><strong>${artist}</strong> - ${songTitle}</h2>
              <span>${lyrics}</span>
          `;
    }
  
    paginacion.innerHTML = '';
  }
