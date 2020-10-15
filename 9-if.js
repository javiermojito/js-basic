//estructura

var haceSol = false;
var estaLloviendo = false;

if(haceSol || estaLloviendo){
    //bloque de código de aca.
    console.log("Voy a sacar la sombrilla");
}else{
    //La acción por defecto.
    console.log("No voy a sacar la sombrilla");
}

//Ejemplo
//Bar LosDevs

var edad = 30;

if(edad === 18){
    console.log("Tienes un shot gratis");
}
else if(edad > 18){
    console.log("Bienvenido a LosDevs");
}
else if(edad > 45){
    console.log("Bienvenido señoooor al bar");
}
else{
    console.log("Lo sentimos, no tienes la edad para entrar al bar.");
}

//Operador ternario

// condicion ? //Resultado si es true// : //Resultado si es false//

var edad = 19;

var mensajeFinal = edad >= 18? "Bienvenide al bar" : "Lo sentimos, no tienes edad para entrar al bar";
console.log(mensajeFinal);