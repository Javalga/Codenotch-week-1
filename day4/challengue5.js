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
    anyoExpedicion: 2010,
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

for(persona of personas){
  if(persona.colorPelo === 'Castaño'){
    console.log(persona.nombre);
  }
  if(persona.anyoNacimiento < 1982){
    console.log(persona.nombre)
  }
  if((persona.colorPelo === 'Negro' && persona.dni.anyoExpedicion < 2012) || persona.anyoNacimiento > 2004 && (persona.aficiones === 'Comer' || persona.aficiones === 'Dormir')){
    console.log(persona.dni.lugarNacimento)
  }
}