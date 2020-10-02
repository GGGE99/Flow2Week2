import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"

let error = document.getElementById("error")
let editID

loadPersonTable()

function loadPersonTable() {
  personFacade.getAllPerson().then(data => {
    const persons = data.all
    const tableBody = persons.map(person =>
      `<tr>
          <td>${person.id}</td>
          <td>${person.fName}</td>
          <td>${person.lName}</td>
          <td>${person.phone}</td>
          <td>${person.street}</td>
          <td>${person.zip}</td>
          <td>${person.city}</td>
          <td><a href="#" class="btndelete text-danger" id="${person.id}">delete</a>/<a href="#" class="btnedit" id="${person.id}">edit</a></td>
      </tr>`)
    document.getElementById("tbody").innerHTML = tableBody.join("")
  }).catch(writeError);
}

function addPerson() {
  let fName = document.getElementById("fname").value
  let lName = document.getElementById("lname").value
  let phone = document.getElementById("phone").value
  let street = document.getElementById("street").value
  let zip = document.getElementById("zip").value
  let city = document.getElementById("city").value
  let person = { fName, lName, phone, street, zip, city }
  console.log(person)

  personFacade.addPerson(person).then(loadPersonTable).catch(writeError)
}

function deletePerson(id) {
  personFacade.deletePerson(id).then(loadPersonTable).catch(writeError)
}

function getPersonToEdit(id) {
  personFacade.getPerson(id).then(data => {
    document.getElementById("fname").value = data.fName
    document.getElementById("lname").value = data.lName
    document.getElementById("phone").value = data.phone
    document.getElementById("street").value = data.street
    document.getElementById("zip").value = data.zip
    document.getElementById("city").value = data.city
  }).catch(writeError)
}

function editPerson(id){
  let fName = document.getElementById("fname").value
  let lName = document.getElementById("lname").value
  let phone = document.getElementById("phone").value
  let street = document.getElementById("street").value
  let zip = document.getElementById("zip").value
  let city = document.getElementById("city").value

  let person = { id, fName, lName, phone, street, zip, city }
  personFacade.editPerson(person).then(loadPersonTable).catch(writeError)
}

function clearAllInputs(){
  document.getElementById("fname").value = ""
  document.getElementById("lname").value = ""
  document.getElementById("phone").value = ""
  document.getElementById("street").value = ""
  document.getElementById("zip").value = ""
  document.getElementById("city").value = ""
}


function writeError(err) {
  error.style.display = "block"
  if (err.status) {
    err.fullError.then(e => {
      error.innerHTML = `<p>${e.message}</p>`
    })
  }
  else { error.innerHTML = `<p>Network error</p>` }
}



document.getElementById("reload").addEventListener("click", evt => {
  evt.preventDefault()
  loadPersonTable()
  error.style.display = "none"
})

document.getElementById("savebtn").addEventListener("click", evt => {
  evt.preventDefault()
  addPerson()
})

document.getElementById("addPerson").addEventListener("click", evt => {
  evt.preventDefault()
  clearAllInputs()
})

//TODO 
document.getElementById("editbtn").addEventListener("click", evt => {
  evt.preventDefault()
  editPerson(editID)
})

document.getElementById("tbody").addEventListener("click", evt => {
  evt.preventDefault()
  error.style.display = "none"
  let pressed = evt.srcElement
  if (pressed.className === "btndelete text-danger") {
    let id = pressed.id
    deletePerson(id)
  } else if (pressed.className === "btnedit") {
    editID = pressed.id
    getPersonToEdit(editID)
    document.getElementById("savebtn").style.display = "none"
    document.getElementById("editbtn").style.display = "block"
    document.getElementById("editPerson").click()
  }
})

var myElementToCheckIfClicksAreInsideOf = document.querySelector('.modal-content');
var myElementToCheckIfVis = document.querySelector('#myModal');

document.body.addEventListener('click', function (event) {
  if (!myElementToCheckIfClicksAreInsideOf.contains(event.target) && myElementToCheckIfVis.style.display === "block" || event.target.id === "editbtn") {
    document.getElementById("savebtn").style.display = "block"
    document.getElementById("editbtn").style.display = "none"
  }
})



