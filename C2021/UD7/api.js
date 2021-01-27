
//Libreria Llamadas API : En este archivo vamos a tener todos los métodos que van hacer llamadas
//a una determinada API

 function llamadaGetAPI (url) 
 {
     return new Promise( function(resolve , reject){

        const client = new XMLHttpRequest();    

        client.addEventListener("readystatechange", () => {
            if (client.readyState === 4 && client.status === 200){
                resolve(client.response);
            }
            else if(client.readyState === 4 && client.status != 200){
                reject(null);
            }
        });

        client.overrideMimeType("application/json");  
        client.responseType = "json";
        client.open("GET", url);
        client.withCredentials = false;
        client.send();  //Envia la llamada

     } );
 }


 function llamadaPostAPI (url) 
 {
    return new Promise( function(resolve , reject) {

        const client = new XMLHttpRequest();  

        client.addEventListener("readystatechange", () => {
            if (client.readyState === 4 && client.status === 200){
                resolve(client.response);
            }
            else if(client.readyState === 4 && client.status != 200)
                reject(new Error("Errrrrrrorrrrr"));
        });

        client.overrideMimeType("application/json");  
        client.responseType = 'json';
        client.open("POST", url);
        client.send();
    }  );
 }
