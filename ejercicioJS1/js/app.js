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

});

let getVideo = document.querySelector(".videos");

if (getVideo) {

    getVideo.addEventListener("play", function () {
        console.log("Begin play Video");
    });

    getVideo.addEventListener("ended", function () {
        console.log("End Video");
        alert("Final \n\n The End !!!!!!");
        let getConfirm = confirm("Do you want reload video");

        if (getConfirm) getVideo.play(); else window.location = "http://www.google.com.ar";
    });

    getVideo.addEventListener("seeking", function () {
        console.log("search in video " + this.currentTime);
    });
}

console.log("Max Number" + Number.MAX_SAFE_INTEGER);
console.log("Max Number" + Number.MIN_SAFE_INTEGER);

let checkNumber = "20.33";
let checkNumber_b = 20.33;
let checkNumber_l = "2012312312312412111111111111133";

console.log(checkNumber, typeof checkNumber, typeof Number(checkNumber));
console.log(Number.isSafeInteger(checkNumber));
console.log(Number.isNaN(checkNumber));
console.log(isNaN(checkNumber));
console.log(parseInt(checkNumber));
console.log(parseFloat(checkNumber_l));
//exponencial
console.log(checkNumber_b.toExponential(3));
//tres decimales
console.log(checkNumber_b.toFixed(3));
//precision tres decimales
console.log(checkNumber_b.toPrecision(3));


let sTextTesting = "Esto es una busqueda sin tener en cuenta Mayuscula y MinusCula por eso eStO es asi";
//Buscar un texto en la frase sin tener en cuenta case sensitive
console.log( "En el texto \n" + sTextTesting + "\n esta la palabra ula \n" + sTextTesting.search(/ula/i)) + "\n posicion" ;
//Busca todas las ocurrencias sin tener en cuenta case sensitive
console.log(sTextTesting.match(/sto/gi));

console.log("el char ubicado en la pos 14 comenzando del 0 es " , sTextTesting.charAt(14));

console.log("Convierte en array split un string " , sTextTesting.split());

let setNumber = 123;

let newStringFormat = setNumber.toString().concat(" agregregando");

console.log("en minusculas = " ,newStringFormat.toLowerCase());
console.log("en minusculas = " ,newStringFormat.toUpperCase());

let setStringF1 = "Cobol";
let setStringF2 = "JavaScript";

//el literal es alt 96 se usa para armar textos con variables dinamicos
let setFrace = `aprendi a programar ${setStringF1} en mi adolecencia y ahora aprendo a programar en ${setStringF2}`;

console.log(`la concatenarcion quedo ${setFrace}`);
