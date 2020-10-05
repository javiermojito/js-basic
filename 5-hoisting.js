//Lo normi
var miNombre;
miNombre = "Javier";

var miNombre = "Javier";

//----
console.log(miApellido);
var miApellido = "Collazos";



///-----
miApellido = "Collazos";
console.log(miApellido)
var miApellido;  // <--- hoisting


//
hola();

function hola(){
    console.log("Hola!");
}


///
hola();

var hola = function(){
    console.log("Hola");
}