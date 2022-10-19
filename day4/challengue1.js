/* • Construye un sistema que nos muestra por pantalla todos los números del 1 al 10.

• Construye un nuevo sistema que muestre solo los números pares

• Ahora construye uno en que se muestren solamente los números impares y que sean
divisibles por 3.

• Construye TODOS ellos utilizando los bucles for y while. */

// 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
{
  let i = 1;
  while (i < 11) {
    console.log(i);
    i++;
  }
}

//2

for (let i = 1; i <= 10; i++) {
  if(i % 2 === 0){
    console.log(i);
  }
}
{
  let i = 1;
  while (i < 11) {
    if(i % 2 === 0){
      console.log(i);
    }
    i++;
  }
}

// 3

for (let i = 1; i <= 10; i++) {
  if(i % 2 !== 0 && i % 3 === 0){
    console.log(i);
  }
}
{
  let i = 1;
  while (i < 11) {
    if(i % 2 !== 0 && i % 3 === 0){
      console.log(i);
    }
    i++;
  }
}