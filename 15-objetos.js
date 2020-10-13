//No me gusta.
var nombre = "Javier", apellido = "Collazos", edad = 21;

var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21
}

console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.edad);
console.log(`Hola, soy ${estudiante.nombre} ${estudiante.apellido} y tengo ${estudiante.edad} años`);

//Varios tipos de datos en un objeto

var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21, 
    estaMatriculado: false,
    nombreMayus: "Javier".toUpperCase(),
    apellidoMayus: "Collazos".toUpperCase(),
    nombreCompleto: "Javier Collazos",
    ejemplo: 5+2
}

console.log(estudiante);

//funciones
var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21, 
    estaMatriculado: false,
    presentarse: function(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }   
}

estudiante.presentarse();

//
var nombre = "Otro";

var estudiante = {
    nombre: nombre,
    apellido: "Collazos",
    edad: 21, 
    estaMatriculado: false,
    presentarse: function(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }   
}

console.log(estudiante.nombre);
estudiante.presentarse();

/////
var estudiante = {
    nombre: "Javier",
    apellido: "Collazos",
    edad: 21, 
    estaMatriculado: false,
    nombreMayus: function(){
        return this.nombre.toUpperCase();
    },
    apellidoMayus: function(){
        return this.apellido.toUpperCase();
    },
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(estudiante.nombreMayus());

var estudiante2 = {
    nombre: "Laura",
    apellido: "Robledo",
    edad: 12, 
    estaMatriculado: true,
    nombreMayus: function(){
        return this.nombre.toUpperCase();
    },
    apellidoMayus: function(){
        return this.apellido.toUpperCase();
    },
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

console.log(estudiante.nombreMayus());
console.log(estudiante2.nombreCompleto());

//Método constructor
function estudiante(pNombre, pApellido, pEdad, pEstadoMatriculado)
{
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
    this.estadoMatriculado = pEstadoMatriculado;
}

var miEstudiante = new estudiante("Javier", "Collazos", 21, true);
var miEstudiante2 = new estudiante("Laura", "Robledo", 30, false);
var miEstudiante3 = new estudiante("Otro", "Tomate", 50, false);

console.log(miEstudiante);
console.log(miEstudiante2);
console.log(miEstudiante3);

//
var x = 34;
var y = new Number("34");
var z = new Number("34");
console.log(typeof z);

console.log(y == z);
console.log(y === z); 

//NO SE PUEDEN COMPARAR OBJETOS EN JAVASCRIPT

//Stringify
var y = new Number("34");
var z = new Number("34");

var tempY = JSON.stringify(y);
var tempZ = JSON.stringify(z);

console.log(tempY);
console.log(tempZ);

console.log(tempY == tempZ);
console.log(tempY === tempZ);

////

var persona = {
    nombre: "Javier",
    edad: 21
}

function nombreEnMayuscula(nombre){
    return nombre.toUpperCase();
}

nombreEnMayuscula(persona.nombre);

//
var persona = {
    nombre: "Camilo",
    edad: 21
}

function nombreEnMayuscula(personaObj){
    var nombre = personaObj.nombre;
    var edad = personaObj.edad;

    return nombre.toUpperCase();
}

console.log(nombreEnMayuscula(persona));

//Truco
var persona = {
    nombre: "Santiago",
    edad: 46
}

function nombreEnMayuscula(personaObj){
    var { nombre } = personaObj;
    var { edad }  = personaObj;
    
    return nombre.toUpperCase() + " " +edad;
}

console.log(nombreEnMayuscula(persona));

//
var persona = {
    edad: 21
}

function nombreEnMayuscula({ nombre }){
    return nombre.toUpperCase();
}

//console.log(nombreEnMayuscula(persona));
console.log(nombreEnMayuscula({edad: "Otro"}));

//OJO
var persona = {
    nombre: "Javier",
    edad: 21
}

function cumpliranios(personaObj){
    personaObj.edad += 1;
}

cumpliranios(persona);
console.log(persona.edad);

//Crear una copia de mi modificacion
var persona = {
    nombre: "Javier",
    edad: 21
}

function cumpliranios(personaObj){
    return {
        ...personaObj,
        edad: personaObj.edad + 1,
        otro: "tomate"
    }
}

var copia = cumpliranios(persona);
console.log(persona);
console.log(copia);

//una cosa superimportante

var persona={
    nombre: "Javier",
    edad: 21,
    hobbies: {
        artes: true,
        ciencias: true,
        deportes: false,
        literatura: false,
    }
}

console.log(persona.hobbies.artes);
console.log(persona.hobbies);