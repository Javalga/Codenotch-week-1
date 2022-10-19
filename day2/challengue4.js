let mySet = new Set([1,'1', 'Saludo',[1,2,3,4]])

console.log(mySet); 
console.log(mySet.size);
console.log(mySet.has(2));
mySet.delete('1')
console.log(mySet);