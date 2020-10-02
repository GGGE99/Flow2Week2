import "./style.css"
import "bootstrap/dist/css/bootstrap.css"

let lastC = undefined

document.getElementById("svg2").addEventListener("click", evt => {
  evt.preventDefault()

  if(lastC !== undefined) lastC.fill = "#c0c0c0";

  let id = evt.target.id
  let c = document.getElementById(id).style
  c.fill = "red";
  lastC = c

  if (id.includes("-")) {
    let idSplit = id.split("-")
    id = idSplit[0]
  }
  if(id !== "svg2")getCountry(id)
  
})

const url = "https://restcountries.eu/rest/v1/alpha?codes="

function getCountry(id) {
  fetch(url + id).then(res => res.json()).then(data => {
    let p = document.getElementById("info")
    let text = data.map(n =>
      `Country: ${n.name}<br>
       Population: ${n.population}<br>
       Area: ${n.area}<br>
       Borders: ${n.borders}<br>
      `
    )
    p.innerHTML = text
  })
}



