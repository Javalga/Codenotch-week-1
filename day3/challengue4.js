let persona1 = {
  nombre: "Miguel",
  apellido: "Gutierrez",
  anyoNacimiento: 1976,
  aficiones: ["Correr", "Esquiar", "Patinar"],
  dni: {
    anyoExpedicion: 2015,
    lugarNacimento: "Malaga",
  },
  colorPelo: "Castaño",
};

let persona2 = {
  nombre: "Pilar",
  apellido: "Martinez",
  anyoNacimiento: 1990,
  aficiones: ["Senderismo", "Salir", "Pintar"],
  dni: {
    anyoExpedicion: 2016,
    lugarNacimento: "Sevilla",
  },
  colorPelo: "Rubio",
};

let persona3 = {
  nombre: "Estela",
  apellido: "Segovia",
  anyoNacimiento: 1980,
  aficiones: ["Leer", "Videojuegos", "Musica"],
  dni: {
    anyoExpedicion: 2019,
    lugarNacimento: "Madrid",
  },
  colorPelo: "Negro",
};

let persona4 = {
  nombre: "Daniel",
  apellido: "Perez",
  anyoNacimiento: 2000,
  aficiones: ["Gimnasio", "Leer", "Patinar"],
  dni: {
    anyoExpedicion: 2015,
    lugarNacimento: "Murcia",
  },
  colorPelo: "Moreno",
};

let personas = [persona1, persona2, persona3, persona4]

// castaño
if (personas[0].colorPelo === 'Castaño'){
  console.log(personas[0].nombre);
}
if (personas[1].colorPelo === 'Castaño'){
  console.log(personas[1].nombre);
}
if (personas[2].colorPelo === 'Castaño'){
  console.log(personas[2].nombre);
}
if (personas[3].colorPelo === 'Castaño'){
  console.log(personas[3].nombre);
}

// mayores de 30

if(personas[0].anyoNacimiento < 1992){
  console.log(personas[0].nombre)
}
if(personas[1].anyoNacimiento < 1992){
  console.log(personas[1].nombre)
}
if(personas[2].anyoNacimiento < 1992){
  console.log(personas[2].nombre)
}
if(personas[3].anyoNacimiento < 1992){
  console.log(personas[3].nombre)
}

/* Mostrar el lugar de nacimiento de todos los que tengan el pelo negro y el dni caducado, o sean
menores de edad y su afición sea comer o dormir. */

if((personas[0].colorPelo === 'Negro' && personas[0].anyoExpedicion < 2012) || (personas[0].anyoNacimiento < 2004 && (personas[0].aficiones.includes('Dormir') || personas[0].aficiones.includes('Comer')))){
  personas[0].dni.lugarNacimento
}
if((personas[1].colorPelo === 'Negro' && personas[1].anyoExpedicion < 2012) || (personas[1].anyoNacimiento < 2004 && (personas[1].aficiones.includes('Dormir') || personas[1].aficiones.includes('Comer')))){
  personas[1].dni.lugarNacimento
}
if((personas[2].colorPelo === 'Negro' && personas[2].anyoExpedicion < 2012) || (personas[2].anyoNacimiento < 2004 && (personas[2].aficiones.includes('Dormir') || personas[2].aficiones.includes('Comer')))){
  personas[2].dni.lugarNacimento
}
if((personas[3].colorPelo === 'Negro' && personas[3].anyoExpedicion < 2012) || (personas[3].anyoNacimiento < 2004 && (personas[3].aficiones.includes('Dormir') || personas[3].aficiones.includes('Comer')))){
  personas[3].dni.lugarNacimento
}