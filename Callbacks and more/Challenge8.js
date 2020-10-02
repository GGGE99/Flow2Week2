let members = [{ name: "hans", age: 14, gender: "male" }, { name: "jens", age: 21, gender: "male" }, { name: "Peter", age: 18, gender: "male" }]

function removeGenderOnAll(arr) {
    let newArray = []
    arr.forEach(m => {
        let mem = {...m}
        delete mem.gender
        newArray.push(mem)
    });
    return newArray
  }
  
  const addJusted = removeGenderOnAll(members);
  console.log(members)
  console.log(addJusted)
  
   