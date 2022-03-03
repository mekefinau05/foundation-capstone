const baseURL = `http://localhost:4002/`


const searchButton = document.querySelector('#search')
const scheduleButton = document.querySelector('#scheduled')

const editButton = document.querySelector('#edit')
const deleteButton = document.querySelector('#delete')

scheduleButton.addEventListener('click', ) 
searchButton.addEventListener('click', ) 



document.getElementById("scheduled").onclick = function () {
    axios.post("http://localhost:4002")
        .then(res (res))
        .catch(err => (err))

}

document.getElementById("search").onclick = function () {
    axios.get("http://localhost:4002")
        .then(res (res))
        .catch(err => (err))
}

document.getElementById("edit").onclick = function () {
    axios.put("http://localhost:4002")
        .then(res (res))
        .catch(err => (err))
}

document.getElementById("delete").onclick = function () {
    axios.delete("http://localhost:4002")
        .then(res (res))
        .catch(err => (err))
}
    



