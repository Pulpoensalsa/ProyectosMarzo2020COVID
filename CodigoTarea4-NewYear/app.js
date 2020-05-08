window.onload=iniciar;


let dia, hora, minutos, segundos, anio, finAnio, actual, diferencia;
function iniciar(){
    dia = document.getElementById("dias");
    minutos = document.getElementById("minutos");
    hora = document.getElementById("horas");
    segundos = document.getElementById("segundos");
    anio = document.getElementById("anio-grande");

    setInterval(()=>imprimirFecha(),1000);
    
}

function imprimirFecha(){
    actual = Date.now();
    finAnio = new Date( (new Date()).getFullYear() + 1, 0, 1, 0, 0, 0, 0);
    console.log(finAnio);
    
    diferencia = finAnio.getTime()  - actual;

    dia.textContent = Math.floor(diferencia /1000 / 60 / 60 / 24);
    
    let horillas = Math.floor(diferencia /1000 / 60 / 60 ) % 24;
    horas.textContent = horillas < 10 ? "0" + horillas : horillas;
    
    let minutillos =  Math.floor(diferencia /1000 / 60 ) % 60;
    minutos.textContent = minutillos < 10 ? "0" + minutillos : minutillos;
    
    let segundillos = Math.floor(diferencia /1000 ) % 60;
    segundos.textContent = segundillos < 10 ? "0"+ segundillos : segundillos;

    anio.textContent = finAnio.getFullYear();
}

