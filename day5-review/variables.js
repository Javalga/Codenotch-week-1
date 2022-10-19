// crea dos variables de tipo nmumber

let number1 = 9

let number2 = 18

// Guarda el producto de dichas variables y en otra variable muestra su valor.

let product = number1 * number2

console.log(product);

/* Crea una variable de tipo string con el texto: “Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus
nuncquam, nec dictum erat feugiat vitae. “ */

let myStr = 'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibusnuncquam, nec dictum erat feugiat vitae.'

console.log(myStr.length);


// Elimina los espacios en blanco de dicha variable y muéstralo por pantalla.

console.log(myStr.replaceAll(' ', ''));

/* Almacena en una variable el resultado de comprobar si es true o false que el producto
del punto 2 sea mayor que 30 y si la palabra ” amet” está en el texto de la variable del
punto 3. */ 

let myBool = product > 30 && myStr.includes('amet')

console.log(myBool);