//
var javier = {
    nombre: "Javier",
    edad:21
}

var santiago = {
    nombre: "Santiago",
    edad:16
}

personaEsMayorDeEdad(santiago);

const MAYORIA_DE_EDAD = 18;

// 
function esMayorDeEdad(edad){
    return edad >= MAYORIA_DE_EDAD;
}

//ArrowFunction
//    nombre del metodo   parametros   ++    resto de la funcion (return)
const esMayorDeEdad =    (edad)        =>    edad >= MAYORIA_DE_EDAD;

/* function esMayorDeEdad(edad){
    return edad >= MAYORIA_DE_EDAD;
} */

////
var javier = {
    nombre: "Javier",
    edad:21
}

var santiago = {
    nombre: "Santiago",
    edad:18
}

const MAYORIA_DE_EDAD = 18;
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD; //ArrowFunction

function personaEsMayorDeEdad(personaObj){
    let resultado = esMayorDeEdad(personaObj)? `${personaObj.nombre} es mayor de edad` : `${personaObj.nombre} es menor de edad`;
    console.log(resultado);
}

personaEsMayorDeEdad(javier);
personaEsMayorDeEdad(santiago);

