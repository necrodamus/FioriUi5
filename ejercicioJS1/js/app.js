//valida el codigo js que cumpla con las validaciones 
"use strict"


window.addEventListener("load", function (event) {
    let getLbl = document.querySelector(".loading");
    getLbl.innerText = "Loading Finished";
    
});
//Con funcion normal solo veo el objeto btn
let getBtn = document.querySelector(".btn");

getBtn.addEventListener("click", function () {
    console.log("Make Click in BTN Green");
});

getBtn.addEventListener("mouseover", function () {
    console.log("Over BTN Green");
});

getBtn.addEventListener("onmouseleave", function () {
    console.log("Leave over BTN Green");
});


//Con funcion arrow veo todo el this y puedo tocar lo que quiero
let getBtn1 = document.querySelector(".button");

getBtn1.addEventListener("click", () => {
    this.location = "http://www.google.com.ar";
});

window.addEventListener("keydown", function (event) {
        console.log("Se pulso la tacla con codigo "
        + event.key)
    
})
