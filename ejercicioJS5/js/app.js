//valida el codigo js que cumpla con las validaciones 
"use strict"

let menor = 10;
let mayor = 100;


try {
   if (mayor < menor) {
      console.log(`el numero mayor es ${mayor}`);
   } else {
      throw new Error(`el numero menor es ${menor}`);
   }   
} catch (error) {
   console.log(error);
}
