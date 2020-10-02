import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import "./userFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"


/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
let jokes = jokeFacade.getJokes()
let jokesHtml = jokes.map(j => `<li>${j}</li>`).join("")
document.getElementById("jokes").innerHTML = jokesHtml

document.getElementById("jokeBtn").addEventListener("click", evt => {
  evt.preventDefault()
  let id = document.getElementById("jokeIdInput").value
  document.getElementById("joke").innerHTML = jokeFacade.getJokeById(id)
});

document.getElementById("addJokeBtn").addEventListener("click", evt => {
  evt.preventDefault()
  let joke = document.getElementById("jokeInput").value
  jokeFacade.addJoke(joke)
  document.getElementById("newJoke").innerHTML = `(${joke}) was added to the jokes`
});
/* JS For Exercise-2 below */
function getQuote() {
  fetch("https://studypoints.info/jokes/api/jokes/period/hour")
  .then(res => res.json())
  .then(data => {
    let quote = data.joke
    document.getElementById(id).innerHTML = quote
  })
}

getQuote("quoteOfTheHoure")
setInterval(getQuote("quoteOfTheHoure"), 3600000)

document.getElementById("getQuoteBtn").addEventListener("click", evt => {
  evt.preventDefault()
  getQuote("quote")
});

/* JS For Exercise-3 below */
load()
function load() {
  userFacade.getUsers().then(users => {
    let html = users.map(d =>
      `<tr>
          <td>${d.id}</td>
          <td>${d.age}</td>
          <td>${d.name}</td>
          <td>${d.gender}</td>
          <td>${d.email}</td>
        </tr>`).join("")
    document.getElementById("allUserRows").innerHTML = html
  })
}

document.getElementById("userBtn").addEventListener("click", evt => {
  evt.preventDefault()
  let id = document.getElementById("userId").value
  let p = document.getElementById("user")
  userFacade.getUser(id).then(data => {
    let html = ""
    for (const [key, value] of Object.entries(data)) {
      html += `${key}: ${value}<br>`
    }
    p.innerHTML = html
  })
})

document.getElementById("addUserBtn").addEventListener("click", evt => {
  evt.preventDefault()
  let user = { 
    name: document.getElementById("newUserName").value, 
    age: document.getElementById("newUserAge").value,
    gender: document.getElementById("gender").value, 
    email: document.getElementById("newUserEmail").value }

  userFacade.addUser(user).then(load()).catch(err => {
    let p = document.getElementById("addUserErr")
    if (err.status) {
      err.fullError.then(e => p.innerHTML = e.msg)
    } else {
      p.innerHTML = "NetWork error" + er
    }
  })
})

document.getElementById("editGetUserBtn").addEventListener("click", evt => {
  evt.preventDefault()
  let id = document.getElementById("editGetUserById").value
  userFacade.getUser(id).then(data => {
    document.getElementById("editUserName").value = data.name
    document.getElementById("editUserAge").value = data.age
    document.getElementById("editGender").value = data.gender
    document.getElementById("editUserEmail").value = data.email
  })
})

document.getElementById("editUserBtn").addEventListener("click", evt => {
  evt.preventDefault()
  let user = { 
    id: document.getElementById("editGetUserById").value,
    name: document.getElementById("editUserName").value, 
    age: document.getElementById("editUserAge").value, 
    gender: document.getElementById("editGender").value, 
    email: document.getElementById("editUserEmail").value
  }
  userFacade.editUser(user).then(load())
})

document.getElementById("deleteUserByIdBtn").addEventListener("click", evt => {
  let id = document.getElementById("deleteUserById").value
  userFacade.deleteUser(id).then(a => {
    load()
    document.getElementById("msg").innerHTML = `User with id ${id} was deleted`
  });

})

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



