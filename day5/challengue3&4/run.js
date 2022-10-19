let myLib = require("./vectorLib");

// myLib contains the following functions = makeVector, addTwoVectors, multiplyVectorNumber, subtractTwoVectors, multiplyTwoVectors, evenFilter and summation
// addTwoVectors,  subtractTwoVectors, multiplyTwoVectors will ONLY work if v1 and v2 has the same length

let vector1 = myLib.makeVector(15, 30);

let vector2 = myLib.makeVector(15, 80);

console.log(vector1);
console.log(vector2);

console.log(myLib.addTwoVectors(vector1, vector2));
console.log(myLib.multiplyVectorNumber(5, vector1));
console.log(myLib.subtractTwoVectors(vector1, vector2));
console.log(myLib.multiplyTwoVectors(vector1, vector2));
