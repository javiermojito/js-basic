//Como crear un arreglo
var juguetes = ["Muñeca", "Carro", "Balón"];
console.log(juguetes);

//Pueden guardar más de un tipo de dato
var ejemplo = [ 1 , "Hola", '🎈', '🎀', { name: "Javier", age: 21 }, true];
console.log(ejemplo);

//Cuantos elementos
var juguetes = ["Muñeca", "Carro", "Balón"];
console.log(juguetes.length);

//Indices -> Acceder
//              0         1         2
var juguetes = ["Muñeca", "Carro", "Balón"];
//console.log(juguetes[0]);

//push -> Nos permite agregar un elemento a la lista y lo agrega al final.
juguetes.push("LEGO"); //[ 'Muñeca', 'Carro', 'Balón', 'LEGO' ]
console.log(juguetes);

//pop -> Saca el último elemento de la lista.
juguetes.pop(); 
console.log(juguetes);

//unshift -> Podemos agregar elementos al inicio de la lista.
juguetes.unshift("LEGO"); //[ 'LEGO', 'Muñeca', 'Carro', 'Balón' ]
console.log(juguetes);

//shift -> Saca el primer elemento del array.
juguetes.shift(); //[ 'Muñeca', 'Carro', 'Balón' ]
console.log(juguetes);

//LIFO - FIFO
//Pilas - Filas(colas) 


//indexOf -> Posición se encuentra un elemento
//              0          1        2
var juguetes = ["Muñeca", "Carro", "Balón"];
var indexCarro = juguetes.indexOf("Carro");
console.log(indexCarro);

//Metodos adicionales de arreglos
var juguetes = ["Muñeca", "Carro", "Balón"];
juguetes.reverse();
console.log(juguetes);

//Sort
var juguetes = ["Muñeca", "Carro", "Balón", 1 , "Tractor", 6, "LEGO", true, 3, false];
juguetes.sort();
console.log(juguetes);

//Slice
var juguetes = ["Muñeca", "Carro", "Balón", 1 , "Tractor", 6, "LEGO"];
var recorte = juguetes.slice(1,4);
console.log(juguetes);
console.log(recorte);
var recorte = juguetes.slice(3);
console.log(juguetes);
console.log(recorte);

//Quiero una copia para revertir
var juguetes = ["Muñeca", "Carro", "Balón", 1 , "Tractor", 6, "LEGO"];
var copiaJuguetes = juguetes; // "Hice una copia de mi arreglo."
var juguetesInvertidos = copiaJuguetes.reverse();

console.log(juguetes);
console.log(juguetesInvertidos);

//COMO CREO UNA COPIA.
//Forma viejita
var juguetes = ["Muñeca", "Carro", "Balón", 1 , "Tractor", 6, "LEGO"];
var copiaJuguetes = juguetes.slice();
copiaJuguetes.reverse();
console.log(juguetes);
console.log(copiaJuguetes);

var juguetes = ["Muñeca", "Carro", "Balón", "Tractor"];
var copiaJuguetes = ["SOY UN ELEMENTO", ...juguetes, "estoy al final"];
//Spread operator
console.log(juguetes);
console.log(copiaJuguetes);

/*
var miNombre = "Javier";
var copiaNombre = miNombre + "Collazos";
console.log(miNombre);
console.log(copiaNombre);
*/