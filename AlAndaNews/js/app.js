// if ('serviceWorker' in navigator)
// {
//     window.addEventListener('load',function(){
//         this.navigator.serviceWorker.register('../sw.js')
//         .then(function(){
//             console.log("ServiceWorker registrado");
//         })
//         .catch(function(err){
//             console.log("ServiceWorker mal registrado" + err);
//         })
//     })
// }


window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

    window.requestAnimationFrame(updateLax)
    controlarBotonMenu();
    iniciar();
}


function iniciar(){
    document.getElementById("numero1").addEventListener("click", abrirVentana,false);
}

function controlarBotonMenu(){
    // Web Menu: https://github.com/tobiasahlin/animated-menu
    let menuLink = document.getElementById("menu-link");
    menuLink.addEventListener("click", abrirCerrarMenu);
}

function abrirCerrarMenu(e){
    if(e!=undefined)
        e.preventDefault();
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("menu-overlay").classList.toggle("open");

    if(e==undefined)
    {
        let target= window.event.target.id;
        switch(target){
            case "info_menu" : jump("container1"); break;
            case "revista_menu" : jump("container2"); break;
            case "contacto_menu" : jump("container3"); break;
        }
    }
}

function jump(hash) { 
    setTimeout(function(){ location.replace("#" + hash);} , 500); 
}

function abrirVentana()
{
    var w = window.open("./numeros/numero1.html");
}



