//Límite de un número - 15 dígitos
var x = 999999999999999;
var y = 9999999999999999;
var z = 99999999999999999915308;

console.log(x);
console.log(y);
console.log(z);

//Límite de decimales, es de 17
var x = 0.1 + 0.2;
console.log(x);

//Ejemplo
var precioDeVino = 200.3;

var total = precioDeVino * 3;
console.log(total);

//Primera solucion
total = precioDeVino * 100 * 3 / 100;
console.log(total);

//Segunda solucion
total = Math.round(precioDeVino * 100 * 3) / 100;
console.log(total);

//Que pasa si quieren n decimales
var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(2);
console.log(totalStr);

//Casting
var totalNum = parseFloat(totalStr);
var totalNum = Number(totalStr);
console.log(typeof totalNum);
console.log(totalNum);

var totalNum = parseInt(totalStr);
console.log("---");
console.log(typeof totalNum);
console.log(totalNum);

//Los numeros se pueden cambiar de base
var num = 456;
var bin = num.toString(2); //Binario
console.log(bin);

//hex -> bin 
var hexNum = 0xFAFAFA;
console.log(hexNum);//16448250
console.log(hexNum.toString(2)); //111110101111101011111010

var numDec = 16448250;
console.log(numDec.toString(16));

//Existe NaN
//Not a number
var temp = 25/"algo";
console.log(temp);

//Infinity
var temp = 25/0;
console.log(temp);