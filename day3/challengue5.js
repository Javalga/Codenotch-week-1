let persona = {
  nombre: "Miguel",
  apellidos: ["Fernandez", "Gutierrez"],
  edad: 44,
  colorPelo: "Castaño",
  dinero: 20000,
  coches: [
    {
      marca: "Toyota",
      numeroAsientos: 5,
      esElectrico: false,
    },
    {
      marca: "Ford",
      numeroAsientos: 5,
      esElectrico: true,
    },
  ],
  padres: [
    {
      //padre
      nombre: "Francisco",
      apellidos: ["Fernandez", "Alonso"],
      edad: 78,
      colorPelo: "Negro",
      dinero: 13000,
      coches: [
        {
          marca: "Tesla",
          numeroAsientos: 6,
          esElectrico: true,
        },
        {
          marca: "Kia",
          numeroAsientos: 5,
          esElectrico: false,
        },
      ],
      padres: [
        {
          //abuelos padre
          nombre: "Jose",
          apellidos: ["Fernandez", "Padilla"],
          edad: 100,
          colorPelo: "Castaño",
          dinero: 15000,
          coches: [
            {
              marca: "Fiat",
              numeroAsientos: 4,
              esElectrico: false,
            },
          ],
        },
        {
          nombre: "Josefa",
          apellidos: ["Alonso", "Garcia"],
          edad: 102,
          colorPelo: "Rubio",
          dinero: 7000,
          coches: [
            {
              marca: "Toyota",
              numeroAsientos: 6,
              esElectrico: true,
            },
            {
              marca: "Kia",
              numeroAsientos: 5,
              esElectrico: false,
            },
          ],
        },
      ],
    },
    //madre
    {
      nombre: "Maria",
      apellidos: ["Gutierrez", "Garcia"],
      edad: 80,
      colorPelo: "Negro",
      dinero: 9000,
      coches: [
        {
          marca: "Fiat",
          numeroAsientos: 5,
          esElectrico: false,
        },
        {
          marca: "Toyota",
          numeroAsientos: 5,
          esElectrico: true,
        },
      ],
      padres: [
        {
          //abuelos madre
          nombre: "Manuel",
          apellidos: ["Gutierrez", "Alonso"],
          edad: 95,
          colorPelo: "Castaño",
          dinero: 10000,
          coches: [
            {
              marca: "Mercedes",
              numeroAsientos: 6,
              esElectrico: true,
            },
          ],
        },
        {
          nombre: "Celia",
          apellidos: ["Garcia", "Garcia"],
          edad: 97,
          colorPelo: "Rubio",
          dinero: 16000,
          coches: [
            {
              marca: "Skoda",
              numeroAsientos: 5,
              esElectrico: false,
            },
            {
              marca: "Fiat",
              numeroAsientos: 8,
              esElectrico: true,
            }
          ],
        },
      ],
    },
  ],
};
if (
  persona.padres[1].padres[1].colorPelo !== "Castaño" &&
  persona.padres[0].padres[0].coches.length === 1
) {
  if (persona.colorPelo === "Verde") {
    persona.colorPelo === "Azul";
  } else {
    persona.colorPelo === "Verde";
  }
}

let suma_dinero =
  persona.padres[0].dinero +
  persona.padres[1].dinero +
  persona.padres[0].padres[0].dinero +
  persona.padres[1].padres[1].dinero;

console.log(suma_dinero);

if (suma_dinero > 100000) {
  persona.coches.push({
    marca: "Ferrari",
    numeroAsientos: 5,
    esElectrico: true,
  });
} else if (suma_dinero > 35000 && suma_dinero < 100000) {
  persona.coches.push({
    marca: "Tesla",
    numeroAsientos: 5,
    esElectrico: true,
  });
} else if (suma_dinero > 35000) {
  persona.coches.push({
    marca: "Peugeot",
    numeroAsientos: 5,
    esElectrico: true,
  });
}

console.log(persona.coches);

// opcionales

// 1
let numCochesPadre = persona.padres[0].coches.length;
let numCochesMadre = persona.padres[1].coches.length;
console.log(numCochesPadre);
console.log(numCochesMadre);

if (numCochesPadre > 1 || numCochesMadre > 1) {
  if (numCochesPadre > 1 && numCochesMadre > 1) {
    let primerCochePadre = persona.padres[0].coches.shift();
    persona.coches.push(primerCochePadre);
    console.log(persona.coches);
    let primerCocheMadre = persona.padres[1].coches.shift();
    persona.coches.push(primerCocheMadre);
    console.log(persona.coches);
  } else if (numCochesPadre > 1) {
    let primerCochePadre = persona.padres[0].coches.shift();
    persona.coches.push(primerCochePadre);
    console.log(persona.coches);
  } else if (numCochesMadre > 1) {
    let primerCocheMadre = persona.padres[1].coches.shift();
    persona.coches.push(primerCocheMadre);
    console.log(persona.coches);
  }
}

// 2
let tieneCocheElectrico = persona.padres[1].padres[0].coches[0].esElectrico;
console.log(tieneCocheElectrico);

if ((tieneCocheElectrico = true)) {
  persona.padres[1].padres[0].dinero += 5000;
  persona.padres[1].padres[1].dinero += 5000;
  console.log(persona.padres[1].padres[0].dinero);
  console.log(persona.padres[1].padres[1].dinero);
}

//3

let primerCocheAbuelaPadre = persona.padres[0].padres[1].coches[0];
let segundoCocheAbuelaMadre = persona.padres[1].padres[1].coches[1];
let cocheNuevo = {
  marca: "Seat",
  numeroAsientos: 8,
  esElectrico: true,
}
console.log(primerCocheAbuelaPadre);
console.log(segundoCocheAbuelaMadre);

if (
  primerCocheAbuelaPadre.numeroAsientos > segundoCocheAbuelaMadre.numeroAsientos
) {
  persona.padres[1].padres[1].coches.push(cocheNuevo);
  console.log(persona.padres[1].padres[1].coches);
}

