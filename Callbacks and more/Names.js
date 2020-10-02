let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

let namesWithA = names.filter(n => n.includes("a"))

let namesRevers  = names.map(n => n.split("").reverse().join(""))

console.log(namesWithA);
console.log(namesRevers);

function myFilter(array, callback){
    let useArr = [...array];
    let i = 0;
    for(x of array){
        if(callback(x) == false) {
            console.log(i)
            useArr.splice(i,1)
            i--;
        }
        i++;
    }
    return useArr;
}

let myArr = myFilter(names, function(name){
    if (name.includes("a")) return true
    else return false
})
console.log(myArr);


function myMap(array, callback){
    let newArray = []

    for(x of array){
        let newItem = callback(x)
        newArray.push(newItem)
    }
    return newArray;
}

let capsArr = myMap(names, function(x){
    return x.toUpperCase()
})

console.log(capsArr)


