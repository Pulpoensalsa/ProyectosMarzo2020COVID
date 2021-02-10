//He redondeado el valor final a 2 decimales tirando por lo bajo
//Al estar hablando de cantidad de dinero
//No se puede redondear nunca para arriba porque estaríamos hablando de dinero que no exist aún
function cambio(){
    //Obtengo los valores de los campos con los que voy a trabajar
    var base = document.getElementById("currency-one").value;
    var symbols = document.getElementById("currency-two").value;

    var campo1 = document.getElementById("amount-one").value;
    var campo2 = document.getElementById("amount-two");

    // Hago la llamada a la api con el valor base
    let url = 'https://v6.exchangerate-api.com/v6/33a79fec8460e639e23fd2ee/latest/'+base;
    fetch(url)
    //Obtengo en json de la llama a la api
    .then(r => r.json())
    .then(data => {

        //Obtengo el objeto donde voy a buscar el multiplicador
        var miObjeto = data.conversion_rates;
        
        //Recorro el objeto
        for( propiedad in miObjeto ) {
            //Cuando coincida la divisa que voy a transformar en el objeto se introduce en la condicion
            if(propiedad==symbols){

                //Obtengo el valor del multiplicador y directamente lo multiplico con el valor del primer input
                var multi = miObjeto[propiedad]*campo1;

                //Muestro el texto con el valor inicial y el valor ya transformado con sus respectivas divisas
                document.getElementById('rate').innerHTML=campo1 + " " + base + " = " + multi + " " + symbols;
                //Modifico el input y le pongo el valor correcto
                campo2.value = Math.floor(multi * 100) / 100;
            }
        }
    })
    //Le pongo un catch por si hay un error en la llamada de la api o la propia funcion que he creado
    .catch(error => console.error(error));  
}

function boton(){
    //Obtengo los valores de los campos con los que voy a trabajar
    var symbols = document.getElementById("currency-one").value;
    var base = document.getElementById("currency-two").value;
    
    //Cambio las divisas de posición
    document.getElementById("currency-one").value = base;
    document.getElementById("currency-two").value = symbols;

    var campo1 = document.getElementById("amount-one").value;
    var campo2 = document.getElementById("amount-two");

    // Hago la llamada a la api con el valor base
    let url = 'https://v6.exchangerate-api.com/v6/33a79fec8460e639e23fd2ee/latest/'+base;
    fetch(url)
    //Obtengo en json de la llama a la api
    .then(r => r.json())
    .then(data => {

        //Obtengo el objeto donde voy a buscar el multiplicador
        var miObjeto = data.conversion_rates;
        
        //Recorro el objeto
        for( propiedad in miObjeto ) {
            //Cuando coincida la divisa que voy a transformar en el objeto se introduce en la condicion
            if(propiedad==symbols){

                //Obtengo el valor del multiplicador y directamente lo multiplico con el valor del primer input
                var multi = miObjeto[propiedad]*campo1;

                //Muestro el texto con el valor inicial y el valor ya transformado con sus respectivas divisas
                document.getElementById('rate').innerHTML=campo1 + " " + base + " = " + multi + " " + symbols;
                //Modifico el input y le pongo el valor correcto
                campo2.value = Math.floor(multi * 100) / 100;
            }
        }
    })
    //Le pongo un catch por si hay un error en la llamada de la api o la propia funcion que he creado
    .catch(error => console.error(error));  
}
