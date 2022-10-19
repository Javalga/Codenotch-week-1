/* Dada la siguiente lista de libros:

• Ready player one
• El nombre del viento
• El temor de un hombre sabio
• Cien años de soledad
• Origen

Imprímelos por pantalla y entre corchetes el número de letras que contiene su nombre (ej.:
Origen [6] ).

Además, debes poner el que sea más largo en negrita. */ 

let bookList = [
  "Ready player one",
  "El nombre del viento",
  "El temor de un hombre sabio",
  "Cien años de soledad",
  "Origen",
];

const bookStats = (arr) => {
  bookList.sort((a,b) => b.length - a.length)
  bookList[0] = `<strong> ${bookList[0]} </strong>`
  for (book of arr){
    console.log(`${book} [${book.length}]`);
  }
};

bookStats(bookList)