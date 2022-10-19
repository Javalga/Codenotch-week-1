let semaforoColor = 'verde'

let pasanCoches = false

let cruzaPeaton 

if(semaforoColor === 'verde' && pasanCoches === false){
  cruzaPeaton = true
  console.log('cruzo la calle');
}else{
  cruzaPeaton = false
  console.log('no cruzo');
}

// semaforoColor === 'verde' && pasanCoches === false ? cruzaPeaton = true : cruzaPeaton = false

console.log(cruzaPeaton);