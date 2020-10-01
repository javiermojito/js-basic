var nombre = "Javier";
console.log("Hola mi nombre es " + nombre);

//Declaración
var edad;
console.log(edad);

//Inicializar
edad = 30;
console.log(edad);

//Var -> reinicializar y reasignar (globales y locales)
var otro = "Hola";
var otro = "Hola2";

console.log(otro);

//Let -> no se reinicializar, pero si se puede reasignar. (local)
let x = 0;
x = 1;
console.log(x);

//Const no se reinicializa, ni reasignar.
const z = 50;
console.log(z);

var vegetales = ["Tomate", "Lechuga", "Zanahoria"];

var persona = {
    nombre: "Javier",
    edad: 21
}

console.log(vegetales);
console.log(persona);