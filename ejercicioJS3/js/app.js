//valida el codigo js que cumpla con las validaciones 
"use strict"
var contenedor = document.querySelector(".containerservice");
var contenedor_b = document.querySelector(".containerflag");

let makeArrayOne = ["Carne", "Pollo", "Cerdo", "Pesacado"];
makeArrayOne.reverse();

let Item1 = null;
let Item2 = null;
let Item3 = null;
let Item4 = null;

console.log("Es un arreglo MakeArrayOne ", Array.isArray(makeArrayOne));

[Item1, Item2, Item3, Item4] = makeArrayOne;

let newExtractArray = makeArrayOne.join();

console.log(Item1, Item2, Item3, Item4);
console.log(newExtractArray);
console.log(newExtractArray.split(","));


//Armo un array limpio en base a un HTML o lo que sea sin tantos campos
let setArrayFromHtml = Array.from(document.querySelectorAll('.platillos p'));
console.log(setArrayFromHtml);
let newArrayFromHtml = setArrayFromHtml.map(platillo => platillo.textContent);

console.log(newArrayFromHtml);
newArrayFromHtml.reverse();
for (let index in newArrayFromHtml) {
   console.log(newArrayFromHtml[index]);
}


let arrayMenu = [
   {
      entrada: "huevos con picadillo",
      platoprincipal: "asado",
      postre: "mouse de chocolate"
   },
   {
      entrada: "ensalada",
      platoprincipal: "milanesas",
      postre: "cheese cake"
   },
   {
      entrada: "sopa",
      platoprincipal: "cordero asado",
      postre: "flan con dulce de leche"
   }
];


//Busqueda por indice en array 
let getKeyArray = arrayMenu.findIndex(menu => menu.platoprincipal == "milanesas");
//Solo busca el primero que encuentra
let getOnlyArray = arrayMenu.find(menu => menu.platoprincipal == "milanesas");
//Crea una array filtrando todos los de la condicion
let getFilterArray = arrayMenu.filter(menu => menu.platoprincipal == "milanesas");
console.info("Es el array numero = ", getKeyArray, arrayMenu[getKeyArray]);


//para validar una condicion buscar si algo la cumple con true o false
//al menos uno
let getOnlyArrayS = arrayMenu.some(menu => menu.platoprincipal == "milanesas");
//Si la cumplen todos
let getOnlyArrayT = arrayMenu.every(menu => menu.platoprincipal == "milanesas");

console.info("Al meno hay una milanga", getOnlyArrayS, "todas son milangas=??", getOnlyArrayT);

localStorage.setItem("ntitle", "New Fashion Array Title");

let getBt1 = document.querySelector(".bt1");

getBt1.addEventListener("click", function () {
   let getNewTitle = localStorage.getItem("ntitle");
   let getTitArray = document.querySelector(".titArray");
   getTitArray.textContent = `Mod ${getNewTitle}`;

   fetch('https://jsonplaceholder.typicode.com/posts')

      .then(data => data.json())
      .then(data => {
         f_build_div(data);
         return f_get_data_flag();
      })
      .then(data_flag => data_flag.json())
      .then(data_flag => {
         f_build_flag(data_flag);         
      })      
});

function f_build_flag(data_flag) {
   data_flag.map((data_flag, i) => {
      let titulo = document.createElement("h5");
      let bandera = document.createElement("img");

      titulo.innerHTML = (i + 1) + " - " + data_flag.name;
      bandera.src = data_flag.flag;
      bandera.width = "50";
      contenedor_b.appendChild(titulo);
      contenedor_b.appendChild(bandera);

   })
}

function f_get_data_flag(){
   return fetch('https://restcountries.eu/rest/v2/all')
}

function f_build_div(data) {
   data.map((data, i) => {
      let titulo = document.createElement("h5");
      let contenido = document.createElement("p");

      titulo.innerHTML = (i + 1) + " - " + data.title;
      contenido.innerHTML = data.body;
      contenedor.appendChild(titulo);
      contenedor.appendChild(contenido);

   })
}



