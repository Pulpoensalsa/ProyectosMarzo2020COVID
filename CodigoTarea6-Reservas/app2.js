const contenedor = document.querySelector(".contenedor");
const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
const cuenta = document.getElementById("numero");
const total = document.getElementById("total");
const peliculas = document.getElementById("pelicula");

//Primero cogemos el precio de la película seleccionada.
let precioEntrada = +peliculas.value;  

console.log(precioEntrada);

contenedor.addEventListener( "click", (e)=>{
    
    let claseItemClick = e.target.classList;
    if(claseItemClick.contains("asiento") && !claseItemClick.contains("ocupado")){
        console.log(e.target);
        claseItemClick.toggle("seleccionado");
        actualizarCuenta();
    }  
})


function actualizarPagina()
{
    let seleccionados = JSON.parse(localStorage.getItem("asientos"));
    if(seleccionados != null)
    {
        let todosAsientos =  document.querySelectorAll(".fila .asiento");
        seleccionados.forEach( (indiceAsiento)=>{
        todosAsientos[indiceAsiento].classList.toggle("seleccionado");
        })
        actualizarCuenta();
    }
}

function actualizarCuenta(){
    let asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
    cuenta.textContent = asientosSeleccionados.length;
    total.textContent= asientosSeleccionados.length * precioEntrada;

    guardarSeleccionados();
}

function guardarSeleccionados(){
    let todosAsientos =  document.querySelectorAll(".fila .asiento");
    let indicesAsientosSeleccionados = [];

    todosAsientos.forEach( (asiento, indice) => {
        if (asiento.classList.contains("seleccionado")){
            indicesAsientosSeleccionados.push(indice);
        } 
    });

    localStorage.setItem('asientos', JSON.stringify(indicesAsientosSeleccionados));
}

peliculas.addEventListener("change", (e)=>{
    precioEntrada = +e.target.value;
    actualizarCuenta();
})

actualizarPagina();

