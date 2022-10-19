// reto 2
let myMap = new Map()
myMap.set('numero', 1)
myMap.set(1, 1)
myMap.set('string', 'Mi string')
myMap.set(2, 'Mi string')
myMap.set('boolean', true)
myMap.set(3, true)
myMap.set('array', [1,2,3,4])
myMap.set(4, ['Juan', 'Pepe', 'Ana', 'Maria'])
//reto 3
console.log(myMap)
console.log(myMap.size);
console.log(myMap.get(3))
console.log(myMap.delete('string'))
console.log(myMap);