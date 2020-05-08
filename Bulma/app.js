// webKitSpeechRecognition

window.onload = iniciar;

let proyector;

function iniciar(){
    proyector = document.getElementById("proyector");

    fetch("https://www.reddit.com/r/RealGirls/.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(reddit) {
        let numeroTotal = reddit.data.dist
        let contador=0;
        let temporizador = setInterval( function timer(){
            if(contador!=numeroTotal)
            {
            let datos= reddit.data.children[contador].data;
            console.log('Post = ', datos.title);
            if(datos.url!="")
            {
                console.log(datos.url);

                if(datos.url.includes("jpg"))
                  proyector.src=datos.url;


               //proyector.src="https://i.redd.it/mmyy50wnj9r41.jpg";
            }
            contador++;
            }
            else
            {
              clearInterval(temporizador);
            }
          } , 4000);
      
    })
    .catch(function(err) {
        console.error(err);
    });
}



// /*
//   Johan Karlsson, 2020
//   https://twitter.com/DonKarlssonSan
//   MIT License, see Details View
  
//   Inspired by:
//   http://thepatternlibrary.com/#leather-nunchuck
//   by https://twitter.com/claudioguglieri
// */
// let canvas;
// let ctx;
// let canvasOffscreen;
// let ctxOffscreen;
// let w, h
// let wOff, hOff;
// let colors;
// let xStep;
// let nrOfSteps;
// let yStep;
// let nrOfStepsY;

// function setup() {
//   canvas = document.querySelector("#canvas");
//   ctx = canvas.getContext("2d");
//   canvasOffscreen = document.createElement("canvas");
//   ctxOffscreen = canvasOffscreen.getContext("2d");
//   reset();
//   window.addEventListener("resize", () => {
//     reset();
//     draw();
//   });
//   setupColors();
// }

// function reset() {
//   w = canvas.width = window.innerWidth;
//   h = canvas.height = window.innerHeight;
  
//   xStep = 120;
//   nrOfSteps = 4;
//   yStep = 50;
//   nrOfStepsY = 10;
//   wOff = canvasOffscreen.width = xStep * nrOfSteps;
//   hOff = canvasOffscreen.height = yStep * nrOfStepsY;

//   ctxOffscreen.fillRect(0, 0, wOff, hOff);
//   ctxOffscreen.lineWidth = 40
//   ctxOffscreen.shadowColor = "black";
//   ctxOffscreen.shadowBlur = 30;
//   ctxOffscreen.shadowOffsetX = 3;
//   ctxOffscreen.shadowOffsetY = 5;
// }

// function setupColors() {
//   // Colors from:
//   // https://coolors.co/26547c-ef476f-ffd166-06d6a0-fcfcfc
//   colors = [
//     "#26547c",
//     "#ef476f",
//     "#ffd166",
//     "#06d6a0",
//     "#fcfcfc",
//   ];
// }

// function draw() {
//   drawPatternOffscreen();
//   jaggIt();
//   copyFromOffscreenCanvas();
// }

// function drawPatternOffscreen() {
//   for(let y = nrOfStepsY+5; y > -5; y -= 1) {
//     ctxOffscreen.beginPath();
//     ctxOffscreen.strokeStyle = colors[Math.abs(y) % 5];
//     for(let x = -1; x < nrOfSteps; x += 1) {
//       let y1 = (Math.abs(x) % 2) * xStep;
//       ctxOffscreen.lineTo(x * xStep, y * yStep + y1);
//     }
//     ctxOffscreen.stroke();
//   }
// }

// function jaggIt() {
//   let counter = 0;
//   for(let x = 0; x < w; x += xStep / 4) {
//     let image = ctxOffscreen.getImageData(x, 0, xStep / 4, hOff);
//     let a = counter % 8;
//     let b = 7 - counter % 8;
//     let yOffset = (-Math.min(a, b) -1) * yStep;
//     ctxOffscreen.putImageData(image, x, yOffset);
//     counter++;
//   }
// }

// function copyFromOffscreenCanvas() {
//   let image = ctxOffscreen.getImageData(0, 0, xStep * 2, yStep * 5);
  
//   for(let x = 0; x < w + xStep; x += xStep * 2) {
//     for(let y = 0; y < h + yStep; y += yStep * 5) {
//       ctx.putImageData(image, x, y);
//     }
//   }  
// }

// setup();
// draw();