
switch (/*Lo que vayamos a evaluar*/){
    case ___ :
        //Bloque actual (se ejecuta si se cumple el caso)
        break;
    case ___ :
        //Bloque actual (se ejecuta si se cumple el caso)
        break;
    case ___ :
        //Bloque actual (se ejecuta si se cumple el caso)
        break;
    default:
        //Bloque por defecto (si no se cumple ninguno de los casos)
}

//Ejemplo
var cm = 10000;

switch(cm){
    case 100:
        console.log("Tengo un metro");
        break;
    case 1000:
        console.log("Tengo un decámetro");
        break;
    case 10000:
        console.log("Tengo un hectómetro");
        break;
    case 100000:
        console.log("Tengo un kilómetro");
        break;
    default:
        console.log("No estoy seguro");
}