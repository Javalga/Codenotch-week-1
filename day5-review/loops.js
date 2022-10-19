/*  Utilizando la estructura iterativa (tipo de bucle) que consideréis mejor, calculad la suma de
los cuadrados de los 100 primeros números. */

let result = 0;

for (let i = 1; i <= 100; i++) {
  result += i * i;
}
console.log(result);

/*Dado el siguiente array: [2, 10, 45, 33, 22, 14] mostrar por pantalla el array que sea el
resultado de multiplicar por 2 cada uno de los elementos del array anterior. Utilizad for...of. */

let numbers = [2, 10, 45, 33, 22, 14];
let numbersPow = [];
for (number of numbers) {
  numbersPow.push(number * 2);
}
console.log(numbersPow);
