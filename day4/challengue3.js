/* • Mostrar en la consola javascript los elementos del array persona que cumplan que su año
de nacimiento esté entre 1978 y 2000. Hacerlo con un bucle for, while y for...of.

• Mostrar el siguiente mensaje:

• - “Tu edad está entre 40 y 20 años” para todos los elementos del array que cumple

la condición del apartado anterior.

• - “Tu edad es menor de 20” para el resto de los casos.

• Agregar la afición “jugar a la play” a todos los elementos del array personas utilizando el
bucle for y for...of.*/

let persona1 = {
  nombre: "Manolo",
  apellido: "Fernandez",
  anyoNacimiento: 1970,
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
  anyoNacimiento: 2004,
  aficiones: ["Comer", "Dormir", "Musica"],
  dni: { anyoExpedicion: 2016, lugarNacimento: "Sevilla" },
  colorPelo: "Castaño",
};

let personas = [persona1, persona2, persona3, persona4];

for (let i = 0; i < personas.length; i++) {
  if(personas[i].anyoNacimiento > 1982 && personas[i].anyoNacimiento < 2002) {
    console.log('Tu edad está entre 40 y 20 años');
  }else if(personas[i].anyoNacimiento > 2002){
    console.log('Tu  edad es menor de 20 años');
  }else{
    console.log('Tu edad es mas de 40 años');
  }
}
{
  let i = 0
  while(i < personas.length){
    if(personas[i].anyoNacimiento > 1982 && personas[i].anyoNacimiento < 2002) {
      console.log('Tu edad está entre 40 y 20 años');
    }else if(personas[i].anyoNacimiento > 2002){
      console.log('Tu  edad es menor de 20 años');
    }else{
      console.log('Tu edad es mas de 40 años');
    }
    i++
  }
}

for (let persona of personas) {
  if (persona.anyoNacimiento > 1982 && persona.anyoNacimiento < 2002) {
    console.log("Tu edad está entre 40 y 20 años");
  } else if (persona.anyoNacimiento > 2002) {
    console.log("Tu  edad es menor de 20 años");
  } else {
    console.log("Tu edad es mas de 40 años");
  }
}

// añadir jugar a la play
for (let i = 0; i < personas.length; i++) {
  personas[i].aficiones.push("Jugar a la play");
  console.log(personas[i].aficiones);
}
{
  let i = 0;
  while (i < personas.length) {
    personas[i].aficiones.push("Jugar a la play");
    console.log(personas[i].aficiones);
    i++;
  }
}
for (let persona of personas) {
  persona.aficiones.push("Jugar a la play");
  console.log(persona.aficiones);
}
