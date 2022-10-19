let persona = {
  nombre: "Miguel",
  apellidos: ["Fernandez", "Gutierrez"],
  edad: 44,
  padres: [
    {
      //padre
      nombre: "Francisco",
      apellidos: ["Fernandez", "Alonso"],
      edad: 78,
      padres: [
        {
          //abuelos padre
          nombre: "Jose",
          apellidos: ["Fernandez", "Padilla"],
          edad: 100,
        },
        {
          nombre: "Josefa",
          apellidos: ["Alonso", "Garcia"],
          edad: 102,
        },
      ],
    },
    //madre
    {
      nombre: "Maria",
      apellidos: ["Gutierrez", "Garcia"],
      edad: 80,
      padres: [
        {
          //abuelos madre
          nombre: "Manuel",
          apellidos: ["Gutierrez", "Alonso"],
          edad: 95,
        },
        {
          nombre: "Celia",
          apellidos: ["Garcia", "Garcia"],
          edad: 97,
        },
      ],
    },
  ],
};

console.log(persona.padres[1].padres[0].nombre);
console.log(persona.padres[0].padres[1].nombre);
console.log(persona.padres[1].edad + persona.padres[0].padres[0].edad);

let edad_abuelo = persona.padres[0].padres[0].edad;
let edad_abuela = persona.padres[0].padres[1].edad;
persona.padres[0].padres[0].edad = edad_abuela;
persona.padres[0].padres[1].edad = edad_abuelo;

console.log(persona.padres[0].padres[0].edad);
console.log(persona.padres[0].padres[1].edad);

persona.padres[1].padres[1].apellidos[1] =
  persona.padres[0].padres[0].apellidos[1];

console.log(persona.padres[1].padres[1].apellidos[1]);

persona.padres[1].apellidos.shift();

console.log(persona.padres[1].apellidos);

console.log(
  persona.padres[0].padres[0].apellidos[1][
    persona.padres[0].padres[0].apellidos[1].length - 1
  ]
);

// reto opcional

console.log(persona.padres[1].padres[1].apellidos[0] === "Martinez");
console.log(persona.padres[0].padres[0].apellidos.includes("Perez"));

console.log(persona.padres[1].padres[1].apellidos[1].replaceAll("r", "z"))

persona.fechaDeNacimiento = new Date(1980, 4, 23).toDateString()
console.log(persona.fechaDeNacimiento);
persona.padres[0].fechaDeNacimiento = new Date(1950, 3, 3).toDateString()
console.log(persona.padres[0].fechaDeNacimiento);
persona.padres[1].fechaDeNacimiento = new Date(1952, 6, 2).toDateString()
console.log(persona.padres[1].fechaDeNacimiento);
persona.padres[1].padres[0].fechaDeNacimiento = new Date(1922, 7, 18).toDateString()
console.log(persona.padres[1].padres[0].fechaDeNacimiento);
persona.padres[1].padres[1].fechaDeNacimiento = new Date(1920, 9, 8).toDateString()
console.log(persona.padres[1].padres[1].fechaDeNacimiento);
persona.padres[0].padres[1].fechaDeNacimiento = new Date(1919, 4, 10).toDateString()
console.log(persona.padres[0].padres[1].fechaDeNacimiento);
persona.padres[0].padres[0].fechaDeNacimiento = new Date(1919, 12, 10).toDateString()
console.log(persona.padres[0].padres[0].fechaDeNacimiento);

let año_del_abuelo = persona.padres[0].padres[0].fechaDeNacimiento.slice(-4)
let mes_de_la_abuela = persona.padres[1].padres[1].fechaDeNacimiento.slice(-7, -5)
console.log(año_del_abuelo)
console.log(mes_de_la_abuela);




