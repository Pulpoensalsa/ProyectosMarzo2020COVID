
const balance = document.getElementById("balance");
const dineroPositivo = document.getElementById("dinero-positivo");
const dineroNegativo = document.getElementById("dinero-negativo");
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const texto = document.getElementById("texto");
const cantidad = document.getElementById("cantidad");
const anadir = document.getElementById("anadir");


// const operacionesDemo = [{ id:1 , texto: "flores", cantidad: -20},
// { id:2 , texto: "salario", cantidad: 300},
// { id:3 , texto: "libro", cantidad: -10},
// { id:4 , texto: "camara", cantidad: 150}];

const TRANSACTION="operaciones";
const localStorageOperaciones = JSON.parse(localStorage.getItem(TRANSACTION)) ;

//let operaciones = operacionesDemo;
let operaciones = localStorage.getItem(TRANSACTION) !== null ? localStorageOperaciones : [];

function anadirOperacion(e){
    e.preventDefault();

    if (texto.value.trim() === '' || cantidad.value.trim() === ''){
        alert("Tienes que introducir los dos campos para insertar una nueva operación");
    }
    else{
        const operachione =  { id : generarRamdomID(), texto : texto.value, cantidad : Number(cantidad.value) };
        operaciones.push(operachione);
        anadirOperacionDOM(operachione);
        actualizarTotales();
        actualizarLocalStorage();
    }
}

function generarRamdomID() {
    return Math.floor(Math.random() * 10000000000);
}

// Añadir operación
function anadirOperacionDOM(elemento){
    //Obtener el signo:
    const signo = elemento.cantidad < 0 ? "-" : "+" ;
    
    //Creamos el elemento nuevo para la lista
    const itemLista = document.createElement("li");
    //Le añadimos la clase según sea negativo o positivo.
    itemLista.classList.add(elemento.cantidad < 0 ? "negativo" : "positivo");
    itemLista.innerHTML = `${elemento.texto} <span>${signo}${Math.abs(elemento.cantidad)}€</span>
                            <button class="eliminar-btn" onclick="eliminarTransaccion(${elemento.id})">X</button>`;

    lista.appendChild(itemLista);
}

//Actualizar el balance total , los ingresos y los gastos.
function actualizarTotales()
{
    const cantidades = operaciones.map( operacion => operacion.cantidad);
    let total = cantidades.reduce( (acumulador, item) => (acumulador += item), 0 );
    total = total.toFixed(2);

    const ingresos = cantidades.filter ( item => item > 0)
                              .reduce ((acumulador, item) => (acumulador += item), 0)
                              .toFixed(2);

    const gastos = (cantidades.filter ( item => item < 0)
                              .reduce ((acumulador, item) => (acumulador += item), 0)
                              * -1 ).toFixed(2);

    balance.innerHTML = `${total}€`;
    dineroPositivo.innerHTML =`${ingresos}€`;
    dineroNegativo.innerHTML =`-${gastos}€`;

}


// function eliminarTransaccion(e){
//     if(e == null)
//         e = window.event;
//     console.log( e.target.parentNode.innerHTML);
// }

function eliminarTransaccion(id){
    operaciones = operaciones.filter (item => item.id !== id)
    actualizarLocalStorage();
    inicializar();
}

function actualizarLocalStorage()
{
    localStorage.setItem(TRANSACTION, JSON.stringify(operaciones));
}

function inicializar(){
    lista.innerHTML="";
    //operacionesDemo.forEach( anadirOperacionDOM );
    operaciones.forEach( anadirOperacionDOM );
    actualizarTotales();
}

inicializar();

anadir.addEventListener("click", anadirOperacion);


