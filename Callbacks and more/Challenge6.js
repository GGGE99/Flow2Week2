let peter = { name: "Peter", age: 18, gender: "male" }
let jens = { name: "jens", age: 21, gender: "male" }
let hans = { name: "hans", age: 14, gender: "male" }

let members = [peter, jens, hans]

function addMayDriveProperty(member) {
    let newMember = { ...member }
    if (newMember.age >= 18) newMember.mayDrive = true
    else newMember.mayDrive = false
    return newMember
}
const addJustedMember = addMayDriveProperty(peter)
console.log(addJustedMember)
console.log(peter)

function addMayDrivePropertyToAll(members) {
    return members.map(m => addMayDriveProperty(m))
}
const addJusted = addMayDrivePropertyToAll(members);
console.log(members)
console.log(addJusted)
