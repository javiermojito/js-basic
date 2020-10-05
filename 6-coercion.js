// Coerción implícita
var a = 1 + "2"; // 12 -- Casting
console.log(typeof a);

var b = 4 * "2";
console.log(typeof b);

//Coerción explícita
var c = 15;
//var d = c + ""; //Casting de number a String

var d = String(c); //Casting de number(c) a String(d)

var e = Number(d); //Casting de String(d) a number(e)

