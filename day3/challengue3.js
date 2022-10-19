let restaurante1 = {
  platos: 4,
  hayDj: true,
  barra_libre: 2,
  coctel: false,
};
let restaurante2 = {
  platos: 2,
  hayDj: true,
  barra_libre: 5,
  coctel: true,
};

if (
  (restaurante1.platos >= 3 &&
    restaurante1.hayDj === true &&
    restaurante1.barra_libre >= 2) ||
  (restaurante1.platos >= 2 &&
    restaurante1.coctel === true &&
    restaurante1.barra_libre >= 1)
) {
  console.log("Vamos al restaurante 1");
} else if (
  (restaurante2.platos >= 3 &&
    restaurante2.hayDj === true &&
    restaurante2.barra_libre >= 2) ||
  (restaurante2.platos >= 2 &&
    restaurante2.coctel === true &&
    restaurante2.barra_libre >= 1)
) {
  console.log("Vamos al restaurante 2");
}else{
  console.log('No cenamos');
}
