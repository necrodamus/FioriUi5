//valida el codigo js que cumpla con las validaciones 
"use strict"


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

console.info("Al meno hay una milanga" , getOnlyArrayS, "todas son milangas=??" , getOnlyArrayT);

