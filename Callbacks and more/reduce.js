var all = ["Hassan", "Peter", "Carla", "Boline"];
var numbers = [2, 3, 67, 33];
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
]
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];


let newAll = all.join("#")
console.log(newAll)

let reducedNumbers = numbers.reduce(function (a, b) {
    return a + b;
});

console.log((reducedNumbers))

let reducedMembers = members.reduce((a,b) => {
    return a += (b.age/members.length)
},0)

console.log(reducedMembers)

var initialValue = {}
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}

var result = votes.reduce(reducer, initialValue)

console.log(result)
