// declaring functions

const calculate = (operation, num1, num2) => {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  }
};

// main

// operations : add , subtract , multiply , divide

console.log(calculate('add', 30, 30));
console.log(calculate('subtract', 50, 30));
console.log(calculate("multiply", 10, 30));
console.log(calculate("divide", 100, 5));
