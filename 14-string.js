var miNombre = "Javier Collazos";

//Existen 2 funciones: 
var miNombreMayus = miNombre.toUpperCase();
var miNombreMin = miNombre.toLowerCase();

console.log(miNombreMayus);
console.log(miNombreMin);

//Longitud
console.log(miNombre.length);

// 0    1    2    3    4    5
//["J", "a", "v", "i", "e", "r"]
var miNombre = "Javier";
var primeraLetra = miNombre.charAt(0);
var otraLetra = miNombre.charAt(2);
console.log(primeraLetra);
console.log(otraLetra);

var miNombre = "Javier";
var parteDeMiNombre = miNombre.charAt(1) + miNombre.charAt(2) + miNombre.charAt(3);

//La otra forma
parteDeMiNombre = miNombre.substr(3,3);
parteDeMiNombre = miNombre.substr(3);

//AMBAS FUNCIONAN DISTINTO
parteDeMiNombre = miNombre.slice(3);
parteDeMiNombre = miNombre.slice(3,5);
console.log(parteDeMiNombre);

//
var miNombre = "santiago";
var primeraLetraMayus = miNombre.charAt(0).toUpperCase() + miNombre.substring(1); //S

console.log(primeraLetraMayus);
//Santiago

//Primero la ultima letra en mayúscula // santiagO

//Segundo ejercicio

var miNombre = "javier andres collazos gómez";
//Javier Andres Collazos Gómez
//split


var nombre = "cristian pérez alvis robledo javier andres collazos gómez"
var partesDelNombre = nombre.split(' ');

console.log(partesDelNombre);

function colocarLetraMayus(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.substr(1);
}

var resultado= ""; //Cristian Pérez Pérez

for(var parte of partesDelNombre){
    let palabraConMayus = colocarLetraMayus(parte); //Pérez 
    resultado = resultado + palabraConMayus + " ";
}

console.log(resultado.trim())





var nombreIndex = partesDelNombre[0].charAt(0).toUpperCase();
console.log(nombreIndex);
var nombreIndexUpper = nombreIndex
var unirNombre = nombreIndexUpper + partesDelNombre[0].substr(1)

// -----------------------------------------------------------------

var nombreIndex2 = partesDelNombre[1].slice(0).charAt(0).toUpperCase()
var nombreIndexUpper2 = nombreIndex2
var unirNombre2 = nombreIndexUpper2 + partesDelNombre[1].substr(1)

//-----------------------------------------------------------------

var nombreIndex3 = partesDelNombre[2].slice(0).charAt(0).toUpperCase()
var nombreIndexUpper3 = nombreIndex3
var unirNombre3 = nombreIndexUpper3 + partesDelNombre[2].substr(1)

//-----------------------------------------------------------------------

var nombreIndex4 = partesDelNombre[3].slice(0).charAt(0).toUpperCase()
var nombreIndexUpper4 = nombreIndex4
var unirNombre4 = nombreIndexUpper4 + partesDelNombre[3].substr(1)

console.log(`${unirNombre} ${unirNombre2} ${unirNombre3} ${unirNombre4}`);




/* 
var nameMayus = "bryan felipe urueña otalora"
console.log(nameMayus.replace(/\b[a-z]/g,c => c.toUpperCase())); 
*/