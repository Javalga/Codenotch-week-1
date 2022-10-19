let persona = {
  nombre: "Julian",
  edad: 37,
  esVaron: true,
  aficiones: ["musica", "dormir", "leer"],
  dni: {
    numero: 29147304,
    fechaDeExpedicion: "16 de mayo de 2020",
  },
};

console.log(persona.nombre);
console.log(persona.aficiones);
console.log(persona.aficiones[1]);
console.log(persona.dni);
console.log(persona.dni.fechaDeExpedicion);

persona.dni.fechaDeExpedicion = "29 de agosto de 2014";

console.log(persona.dni.fechaDeExpedicion);

persona.aficiones.splice(1, 1);
console.log(persona.aficiones);
persona.aficiones.splice(1, 0, 'videojuegos');
console.log(persona.aficiones);
