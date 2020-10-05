//Declarativas
function saludar(){
   console.log("Hola");
}

//Expresión
var saludarVersion2 = function (){
    console.log("Hola soy la version 2");
}

saludarVersion2();

//----//

function suma(param1,param2){
    return param1 + param2;
}

console.log(suma(5,"10"));

function saludarEstudiante(nombreEstudiante){
    //console.log("Bienvenido estudiante " + nombreEstudiante);
    console.log("Bienvenido estudiante " + nombreEstudiante + '\n sdfasdfasdf');
    console.log(`Bienvenido estudiante ${nombreEstudiante} sdfasdfasdf`);
}

saludarEstudiante("Tomate");


saludarEstudiante("José");

//PLANTILLAS LITERALES
function saludarEstudiante(nombreEstudiante){
    console.log(`Hola estudiante ${nombreEstudiante}, te recuerdo que el nombre es ${nombreEstudiante}`);
}

saludarEstudiante("Javier");

function sumar(a,b){
    return a+b;
}