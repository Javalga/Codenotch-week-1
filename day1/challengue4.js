let firstName = "Javi";
let lastName1 = "Alonso";
let lastName2 = "Gallego";

const greetings =
  "Hola, mi nombre es " +
  firstName +
  " " +
  lastName1 +
  " " +
  lastName2 +
  " y tengo 22 años.";
const greetingsButTemplateString = `Hola, mi nombre es ${firstName} ${lastName1} ${lastName2} y tengo 22 años.`;

const greetingsUpperCase = greetings.toUpperCase();
const greetingsButTemplateStringUpperCase =
  greetingsButTemplateString.toUpperCase();

console.log(greetings);
console.log(greetingsButTemplateString);
console.log(greetingsUpperCase);
console.log(greetingsButTemplateStringUpperCase);
