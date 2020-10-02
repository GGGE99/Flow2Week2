
const url = "http://localhost:3333/api/users/"

function getUsers() {
    return fetch(url).then(res => res.json())
}

function getUser(id) {
    return fetch(url + id).then(res => res.json())
}

function addUser(user) {
    return fetch(url, makeRequest("POST", user)).then(handleHttpErrors)
}

function editUser(user) {
    return fetch(url + user.id, makeRequest("PUT", user)).then(handleHttpErrors)
}

function deleteUser(userID) {
    return fetch(url + userID, makeRequest("DELETE")).then(handleHttpErrors)
}

function makeRequest(method, body) {
    var options = {
        method: method,
        headers: {
            'Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': "application/json"
        },
        body: JSON.stringify(body)
    }
    return options
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

const userFacade = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}

export default userFacade