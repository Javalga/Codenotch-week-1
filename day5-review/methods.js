/*  Realiza una función que reciba 5 parámetros que serán 5 números, deberás retornar en un
array estos números ordenados de menor a mayor sin utilizar ningún método de los array
y haciendo uso de bucles. */

const { number } = require("mathjs");

const sorter = (n1, n2, n3, n4, n5) => {
  let list = [n1, n2, n3, n4, n5];
  let n = list.length;
  let j;
  let i;
  let prevValue;
  console.log(list);
  for (j = 1; j < n; j++) {
    for (i = 0; i < n - j; i++) {
      if (list[i] > list[i + 1]) {
        prevValue = list[i];
        list[i] = list[i + 1];
        list[i + 1] = prevValue;
      }
    }
  }
  console.log(list);
  return list;
};

let sortedArr = sorter(5, 8, 4, 2, 1);

/* Teniendo un array de ovejas, cada oveja será un objeto con nombre y un color. Haz
una función que devuelva una lista con todas las ovejas que sean de color rojo y que
además su nombre contenga tanto las letras "n" y "a", sin importar el orden,
las mayúsculas o espacios. */

let sheep1 = {
  name: "Pepa",
  color: "Red",
};
let sheep2 = {
  name: "Manuela",
  color: "Blue",
};
let sheep3 = {
  name: "Eustaquia",
  color: "White",
};
let sheep4 = {
  name: "Marian",
  color: "Red",
};

let sheeps = [sheep1, sheep2, sheep3, sheep4];

const filter = (arr) => {
  for (sheep of arr) {
    let splittedName = sheep.name.split("");
    if (
      sheep.color === "Red" &&
      splittedName.includes("a") &&
      splittedName.includes("n")
    ) {
      console.log(sheep);
    }
  }
};

filter(sheeps);

/* Crea una función que reciba como parámetro un string que será una contraseña de un
usuario, la función debe comprobar que la contraseña es segura o no retornando true o
false, para ser segura debe tener mínimo 8 caracteres, debe incluir 1 mayúscula, 1
minúscula, 1 carácter especial y 1 numero. */

let myPwd = "@Micontraseña1234";
const passwordChecker = (str) => {
  let splittedPwd = str.split("");
  let hasSpecial = false;
  let hasNum = false;

  const specialChecker = (str) => {
    let specialChars = "!@#$%^&*~`";
    let splittedSpecialChars = specialChars.split("");
    for (let i = 0; i < splittedSpecialChars.length; i++) {
      if (str.includes(splittedSpecialChars[i])) {
        hasSpecial = true;
      }
    }
  };

  specialChecker(splittedPwd);

  const numberChecker = (arr) => {
    for (let i = 0; i < 10; i++) {
      if (arr.includes(i.toString())) {
        hasNum = true;
        return;
      }
    }
  };
  numberChecker(splittedPwd);

  if (
    str.length < 8 ||
    str === str.toLowerCase() ||
    str === str.toUpperCase() ||
    hasSpecial === false ||
    hasNum === false
  ) {
    console.log(
      "Password must contain the following parameters: Atleast 8 length, 1 uppercase, 1 lowercase, 1 special character and 1 number"
    );
  } else {
    console.log("Password is valid");
  }
};

passwordChecker(myPwd);
