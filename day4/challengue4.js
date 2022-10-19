/* Calcular el factorial de un numero dado, primero utilizando la sentencia for y luego con
while.

• Dado un array de números, buscar si existe algún numero de ese array que sea múltiplo
de 2 utilizando la sentencia while.

• Realizar la suma de los 100 primeros números. Utilizando el bucle que mejor se adapte al
problema.

• Dado un array de nombres mostrar el índice de la primera ocurrencia del nombre “Pepe”.
Utilizar el bucle que mejor se adapte al problema.

• Generar dos arrays de 100 números aleatorios entre 0 y 20.

• Realizar la suma de los dos arrays anteriores. */
{
  let num = 14;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
    console.log(result);
  }
}
{
  let i = 1;
  let num = 14;
  let result = 1;
  while (i <= num) {
    result = result * i;
    console.log(result);
    i++;
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

{
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
    i++;
  }
  console.log(numbers);
}
{
  let suma = 0;
  for (let i = 0; i < 1001; i++) {
    suma += i;
  }
  console.log(suma);
}

let nombres = ["Javi", "Maria", "Pepe", "Marcos", "Nuria", "Francisco"];
{
  let i = 0
  while (nombres[i] !== 'Pepe' || i < nombres.length) {
    if (nombres[i] === "Pepe") {
      console.log(`El index de Pepe es ${i}`);
    }
    i++
  }
}


let arr1 = [];
let arr2 = [];

for (let i = 0; i < 100; i++) {
  arr1.push(Math.round(Math.random() * (20 - 0) + 0));
  arr2.push(Math.round(Math.random() * (20 - 0) + 0));
}
console.log(arr1);
console.log(arr2);

{
  let suma = [];
  for(let i = 0; i < arr1.length; i++){
    suma.push(arr1[i] + arr2[i]) 
  }
  console.log(suma);
}
