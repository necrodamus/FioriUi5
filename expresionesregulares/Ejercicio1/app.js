window.onload = function() {
    f_init_App();    
};


function f_init_App(params) {
    let getLabelOne = document.getElementById("output_l");
    let getLabelTwo = document.getElementById("output_2");
    let getLabelThree = document.getElementById("output_3");
    let getLabelFour = document.getElementById("output_4");
    let getLabelFive = document.getElementById("output_5");
    let getLabelSix = document.getElementById("output_6");

    //Expresion Regular para comprar tiene que existir el texto completo
    let expresionROne = /El día esta gris \/n muy humedo /;
    let expresionRTwo = new RegExp("El día esta gris /n muy humedo");
    let expresionRThree = new RegExp("ahorro");

    //Si se pone entre [] evalua si al menos uno de la exp existe
    let expresionRFour = new RegExp("[123456789]");
    //Lo mismo pero con rangos
    let expresionChar = new RegExp("[a-z]");
    let expresionNumber = new RegExp("[0-9]");


    getLabelOne.textContent = expresionROne;    
    getLabelTwo.textContent = expresionRTwo;    

    //ShortCuts Expresion Validar Fecha
    let expresionTotal = /\d\d\/\d\d\/\d\d\d\d/;
    let expresionSome = /[/d]/;

    //asci 94 ^ cincunflejo para negacion
    expresionSome = /[^23]/;


    //si queremos controlar un patron al menos una vez se usa + sino 
    //usamos * 
    let expresionLast = /\d+/;

    //si queremos evaluar que exista una expresion o no se le pone ?
    let expresionLast = /mu?ndo/;

    getLabelThree.textContent = "Existe la exp reg ahorro en el texto ? " + expresionRThree.test("ahorro");
    getLabelFour.textContent = `\n Existe el patron ${expresionNumber} en el texto = El en año 2021 la pandemia destruyo Argentina ? ` + expresionNumber.test("El en año 2021 la pandemia destruyo Argentina");
    getLabelFive.textContent = `\n Existe el patron ${expresionTotal} en el texto = 23/01/1972 ? ` + expresionTotal.test("23/01/1972");
    getLabelSix.textContent = `\n Existe el patron ${expresionSome} en el texto = 23/01/1972 ? ` + expresionSome.test("22/01/1972 es una fecha");

}
