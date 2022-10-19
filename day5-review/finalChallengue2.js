/* 1. Crear una matriz (array de arrays) de 10 x 10 es decir 10 elementos y cada uno de ellos es
un array de 10 números.

2. Cada uno de los elementos de la matriz deberá ser un numero aleatorio entre 0 y 50

3. Crear otra matriz con las mismas características que la anterior

4. Realizar la suma de las dos matrices (sumar elemento a elemento)

5. Multiplicar un numero aleatorio por la matriz. Es decir, todos los elementos de la matriz se
multiplicarán por ese numero */

const makeRandomMatrix = (length1, lenght2, max, min = 0) => {
  let newArr = [];
  let insideNewArr = [];
  const createRandomNum = (max, min = 0) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  // fill the first dimension of the matrix
  for (let i = 0; i < length1; i++) {
    //reset
    insideNewArr = [];
    // fill the second dimension of the matrix
    while (insideNewArr.length < lenght2) {
      insideNewArr.push(createRandomNum(max, min));
    }
    newArr.push(insideNewArr);
  }
  return newArr;
};

let matrix1 = makeRandomMatrix(10, 10, 50);
let matrix2 = makeRandomMatrix(10, 10, 50);

const addMatrix = (m1, m2) => {
  let result = [];
  let insideResult = [];
  for (let i = 0; i < m1.length; i++) {
    insideResult = [];
    for (let j = 0; j < m1[i].length; j++) {
      insideResult.push(m1[i][j] + m2[i][j]);
    }
    result.push(insideResult);
  }
  return result;
};

let addedMatrix = addMatrix(matrix1, matrix2);

const multiplyMatrixByNumber = (mat, num) => {
  let result = []
  let insideResult = []
  for ( let i = 0; i < mat.length; i++){
    insideResult = []
    for(let j = 0; j<mat[i].length; j++){
      insideResult.push(mat[i][j] * num)
    }
    result.push(insideResult)
  }
  return result
}
let multipliedMatrix = multiplyMatrixByNumber(matrix1, 10)
console.log(multipliedMatrix);