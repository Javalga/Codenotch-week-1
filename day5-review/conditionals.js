let isSpanish = true;
let price = 10000;

if (isSpanish === true) {
  if (price >= 2000) {
    price * 1.16;
  } else {
    price * 1.1;
  }
} else {
  if(price <=  2000){
    (price * 1.16) * 1.1
  }else {
    (price * 1.1) * 1.1
  }
}
console.log(price);