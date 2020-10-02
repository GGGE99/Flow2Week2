
const url = "https://marcge.dk/tomcat/person/api/person/"

function getAllPerson() {
    return fetch(url + "all").then(handleHttpErrors)
}

function getPerson(id) {
    return fetch(url + id).then(handleHttpErrors)
}

function addPerson(person) {
    return fetch(url, makeOptions("POST", person)).then(handleHttpErrors)
}

function deletePerson(personId) {
    return fetch(url + personId, makeOptions("DELETE")).then(handleHttpErrors)
}

function editPerson(person) {
    return fetch(url + person.id, makeOptions("PUT", person)).then(handleHttpErrors)
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

const personFacade = {
    getAllPerson,
    addPerson,
    deletePerson,
    getPerson,
    editPerson,
}

export default personFacade
