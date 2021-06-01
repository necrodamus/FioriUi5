//valida el codigo js que cumpla con las validaciones 
"use strict"

//Con funcion normal solo veo el objeto btn
let getBtn = document.querySelector(".btn");
getBtn.addEventListener("click", function () {
    console.log("Make Click in BTN");
});
//Con funcion arrow veo todo el this y puedo tocar lo que quiero
let getBtn1 = document.querySelector(".button");

getBtn1.addEventListener("click", () => {
    this.location = "http://www.google.com.ar";
});

let arrayBooks = ["El Gris", "Printon Tale", "Ni un Centavo mas"];
alert("Hello from external file");
console.log("Console Event");
let PublicName = "Andres Valenzi";
f_spread_name(...arrayBooks, "Yo Andy");
f_show_name(PublicName);
f_name("Fiorella", "pera", "naranja", "higo", "ciruela");
f_name();
//Funcion Anonima
let f_check_any = function (name) {
    console.log("Hello " + name);
}
//Funcion Arrow
let f_add_with_arrow = (number1, number2, number3) => {
    return (number1 + number2 + number3)
}

console.log("the arrow add is = " + f_add_with_arrow(1, 444, 12));


f_check_any("Marcela Casquero");

//Ejemplo con call back salida de una funcion que llama a otra
f_operation_numbers(1, 2,
    function (params) {
        console.log("The add is " + params);
    }, function (params) {
        console.log("The les is " + params);
    });

//Parametros rest ... lo que resta
function f_name(params = "Andres Valenzi", ...fruit) {
    alert(params);
    for (let index = 0; index < fruit.length; index++) {
        const element = fruit[index];
        console.log(element);
    }
}


//Funcion CallBack
function f_operation_numbers(number1, number2, fcA, fcL) {
    let makeAdd = number1 + number2;
    let makeLess = number1 - number2;
    fcA(makeAdd);
    fcL(makeLess);
}

//Funcion Spread
function f_spread_name(name1, name2, name3, name4) {
    console.log("1 Valor=" + name1);
    console.log("2 Valor=" + name2);
    console.log("3 Valor=" + name3);
    console.log("4 Valor=" + name4);
}


function f_show_name(name_i) {
    let checkGreatNum = Boolean(10 > 100);
    let setDateAct = new Date();
    //devine un valor unico para todo el programa
    let setEnvironment = Symbol("Dev");
    let setNameMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"
        , "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

    let setPerson = {
        name: "Andres Valenzi",
        twiter: "Necrodamus"
    };

    let setListPersons = [
        {
            name: "Alpha",
            twiter: "Pichicha"
        },
        {
            name: "Fiorella Valenzi",
            twiter: "Patata"
        },
        {
            name: "Marcela Casquero",
            twiter: "Ardillita"
        },
        setPerson
    ];
    //Fomatea un Json en Modo Texto
    let setJsonPersons = JSON.stringify(setListPersons);
    console.log(setListPersons);
    console.log(setJsonPersons);

    //Formatea en Json un texto    
    console.log(JSON.parse(setJsonPersons));
    //Setea la fecha para un dia 31 determinado 
    let setFecha = new Date();
    let setNumberDay = 31;
    setFecha.setDate(setNumberDay);

    console.log("El dia " + setNumberDay)
    console.log("del mes de " + setNameMonth[setFecha.getMonth() - 1] + " se convierte en  " + setFecha);

    console.log("Compara si 10 es mayor que 100 " + checkGreatNum);

    console.log("Developer = " + PublicName);
    let strword = "";
    let strA = "A";
    let awords = [];
    for (let index = 0; index < 30; index++) {
        strword += index === 15 ? "x" : "a";
        awords.push(awords);
    }
    console.log("Concat WORD " + strword);
}