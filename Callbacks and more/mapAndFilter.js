var numbers = [1, 3, 5, 10, 11];

//a
let newNum = numbers.map((a, b) => {
    if(typeof numbers[b + 1] === "number") return a + numbers[b + 1]
    else return a
})

console.log(newNum)

//b
let names = ["Hassan", "Peter", "Jan", "Boline"]

let nameString = `<nav>${names.map(n => `<a href=””>${n}</a>`).join("")}<nav>`

console.log(nameString)

var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

let personString = persons.map(p => `<tr><td>${p.name}</td><td>${p.phone}</td></tr>`).join("\n")

console.log(personString)