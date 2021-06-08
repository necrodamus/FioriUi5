//valida el codigo js que cumpla con las validaciones 
"use strict"

class Combustible {
   constructor(tipo_combustible) {
      this.tipo_combustible = tipo_combustible;
   }

   static

   info() {
      console.log(`el combustible es ${this.tipo_combustible}`);
   }

   set_combustible(input_c) {
      this.tipo_combustible = input_c;
   }
}
class Carne extends Combustible {
   constructor(tipo_combustible, peso, tiempococion, condimento) {
      super(tipo_combustible)
      this.peso = peso;
      this.tiempococion = tiempococion;
      this.condimento = condimento;
   }

   get info() {
      alert(`El peso es de ${this.peso} el tiempo de coccion es de ${this.tiempococion} el condimento es ${this.condimento} `);
   }

   change_combustible (new_combustible) {
      this.set_combustible(new_combustible);
   }

   set peso(input_peso) {
      this.peso = input_peso;
   }
}

let Asado = new Carne("carbon", 2000, 10, "oregano");
Asado.info();
Asado.set_peso(20);
Asado.info();

let Estofado = new Carne("gas", 4000, 50, "salsa");
Estofado.info();
Estofado.set_peso(40);
Estofado.info();



