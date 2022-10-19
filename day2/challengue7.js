let direccion = {
  calle: "San francisca de tolomé",
  numero: 9,
  piso: 3,
  puerta: "a",
};

let direccion2 = direccion;

let direccion3 = { ...direccion };


direccion.ciudad = "Huelva";
console.log(direccion);
console.log(direccion2);
console.log(direccion3);


/* declaramos la variable direccion como un objeto y le damos una serie de propiedades,
igualamos direccion2 a direccion con una asignacion, de forma que si direccion cambia direccion 2 tambien,
con spread operator realizamos una copia de direccion en la variable direccion3,
le damos una nueva propiedad a direccion,
si sacamos todo por consola direccion 2 habra cambiado su valor mientras que direccion3 no porque la copia es previa a la asignacion de la nueva propiedad..*/

let nombres = ['Antonio', 'Manuela', 'Pepe', 'Josefa', 'Eloy'];

let nombres2 = nombres

let nombres3 = [...nombres]

nombres.push('Miguel')

console.log(nombres);
console.log(nombres2);
console.log(nombres3);


/* Ha pasado exactamente lo mismo que en el ejercicio anterior pero en vez de un objeto, hemos declarado un array y hemos usado el metodo push despues de hacer la copia con el spread operator en nombres3 por lo que nombres2 se ve modificado pero nombres3 no.*/

direccion3.pais = 'España';
direccion3 = {...direccion3, ...direccion}

console.log(direccion3);

let nombres4 = [...nombres3, ...nombres]
console.log(nombres4);