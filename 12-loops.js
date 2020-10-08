//
//              0                 1             2
var invitados = ["Danny DeVito" , "Ned Bigby", "Michael Jackson"];
invitados.unshift("Keanu Reeves");

function saludar(invitado){
    console.log(`Bienvenido ${invitado}`);
}

//Estructura for
// Variable, la condicion, el incremento
for(var i = 0; i < invitados.length; i++ ){
    //El código que se va a repetir las veces que nosotros indiquemos
    saludar(invitados[i]);
}

//Estructura for of
for(var invitadoActual of invitados){
    saludar(invitadoActual);
}

invitados.forEach(function(invitadoActual){
    saludar(invitadoActual);
})

invitados.forEach(invitado => saludar(invitado));

//While
var invitados = ["Danny DeVito" , "Ned Bigby", "Michael Jackson"];

while(invitados.length > 0){
    //Código que se repite mientras que la condicion sea true.
    console.log(invitados);
    var invitadoSaludado = invitados.pop();
    saludar(invitadoSaludado);
}

function saludar(invitado){
    console.log(`Bienvenido ${invitado}`);
}

//Do while
var numPasos =  2;
var pasoActual = 5;

//1ro la condicion, luego el código
while(pasoActual < numPasos){
    console.log("Di un paso");
    pasoActual++;
}

//1ro ejecuta el codigo y luego revisa la condición.
var numPasos = 2;
var pasoActual = 5;

do{
    console.log("Di un paso");
    pasoActual++;
}
while(pasoActual < numPasos)


