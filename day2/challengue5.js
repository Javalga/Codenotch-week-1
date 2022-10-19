let arr1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
let arr2 = ["Junio", "Julio", "Agosto", "Septiembre", "Octubre"];
let arr3 = ["Sevilla", "Cordoba", "Granada", "Cadiz", "Huelva"];

let matriz = [arr1, arr2, arr3];
console.log(matriz);
console.log(matriz[2]);
console.log(matriz[2][4]);
console.log(matriz[2][4][1]);

matriz[2] = [1,2,3,4,5]
console.log(matriz);

matriz[1][3] = true
console.log(matriz[1][3]);

matriz[0].shift()
console.log(matriz[0]);

matriz[0].pop()
console.log(matriz[0]);


console.log(matriz[1].sort());