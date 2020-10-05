var primerNombre = "Iskra"; //Global

function nombreCompleto(){
    var segundoNombre = "Fernanda";
    return `${primerNombre} ${segundoNombre}`;
}

//nuevo caso
var primerNombre = "Iskra"; //Global
var segundoNombre = "Michi";

function nombreCompleto(){
    var segundoNombre = "Fernanda";
    return `${primerNombre} ${segundoNombre}`;
}

console.log(segundoNombre);
console.log(nombreCompleto());
