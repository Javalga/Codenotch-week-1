/* • Teniendo la siguiente estructura de objeto JSON:

persona =
{
"nombre" : string,
"apellido" : string,
"anyoNacimiento" : number,
"aficiones": array of string,
"dni": { "anyoExpedicion" : number, "lugarNacimento": string},
"colorPelo" : string
}

• Crear un array denominado personas con 4 objetos de tipo persona.

• Mostrar todos las propiedades y su valor de un objeto persona utilizando for...in

• Mostrar todos los elementos del array personas en la consola con un bucle for, con un
bucle while y con un bucle for...of */

let persona1 = {
  nombre: "Manolo",
  apellido: "Fernandez",
  anyoNacimiento: 1990,
  aficiones: ["Comer", "Dormir", "Musica"],
  dni: { anyoExpedicion: 2016, lugarNacimento: "Sevilla" },
  colorPelo: "Castaño",
};

let persona2 = {
  nombre: "Jose",
  apellido: "Alonso",
  anyoNacimiento: 1993,
  aficiones: ["Correr", "Dormir", "Patinar"],
  dni: { anyoExpedicion: 2020, lugarNacimento: "Madrid" },
  colorPelo: "Negro",
};
let persona3 = {
  nombre: "Maria",
  apellido: "Campos",
  anyoNacimiento: 1985,
  aficiones: ["Leer", "Escribir", "Correr"],
  dni: { anyoExpedicion: 2016, lugarNacimento: "Sevilla" },
  colorPelo: "Castaño",
};
let persona4 = {
  nombre: "Manolo",
  apellido: "Fernandez",
  anyoNacimiento: 1990,
  aficiones: ["Comer", "Dormir", "Musica"],
  dni: { anyoExpedicion: 2016, lugarNacimento: "Sevilla" },
  colorPelo: "Castaño",
};
// 1
let personas = [persona1, persona2, persona3, persona4];
// 2
for (let props in personas[0]){
  console.log(`Las propiedades son ${props} : ${personas[0][props]}`);
}

// 

for(let i = 0; i < personas.length; i++){
  console.log(personas[i]);
}
{
  let i = 0
  while(i < personas.length){
    console.log(personas[i]);
    i++
  }
}

for(let persona of personas){
  console.log(persona);
}


