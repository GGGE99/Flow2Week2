let car = {make: "volvo", year: 2011}
console.log(car)

let carCopy = {...car}
console.log(carCopy)

carCopy.year = 2018

console.log(car)
console.log(carCopy)