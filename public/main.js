const baseURL = `http://localhost:4002/`


const searchButton = document.querySelector('#search')
const scheduleButton = document.querySelector('#scheduled')

const editButton = document.querySelector('#edit')
const deleteButton = document.querySelector('#delete')

//variables
const timeSelect = document.querySelector('#timeSelect')
const monthSelect = document.querySelector('#monthSelect')
const daySelect = document.querySelector('#daySelect')

let selectedTimeOption = timeSelect.options[timeSelect.selectedIndex].innerHTML
let monthSelectedOption = monthSelect.options[monthSelect.selectedIndex].innerHTML
let daySelectedOption = daySelect.options[daySelect.selectedIndex].innerHTML

let appointment = {
    day: daySelectedOption,
    month: monthSelectedOption,
    time: selectedTimeOption
}

timeSelect.addEventListener('change', () => {
    selectedTimeOption = timeSelect.options[timeSelect.selectedIndex].innerHTML
    appointment = {
        day: daySelectedOption,
        month: monthSelectedOption,
        time: selectedTimeOption
    }
    // console.log(selectedTimeOption.innerHTML)
})

monthSelect.addEventListener('change', () => {
    monthSelectedOption = monthSelect.options[monthSelect.selectedIndex].innerHTML
    appointment = {
        day: daySelectedOption,
        month: monthSelectedOption,
        time: selectedTimeOption
    }
})

daySelect.addEventListener('change', () => {
    daySelectedOption = daySelect.options[daySelect.selectedIndex].innerHTML
    appointment = {
        day: daySelectedOption,
        month: monthSelectedOption,
        time: selectedTimeOption
    }
})



const createAppt = (appointment) => {
    // console.log(appointment)
    axios.post("http://localhost:4002/api/appointments", appointment)
        .then(res => {
             
            console.log(res.data)
        }) 
       .catch(err => (console.log(err)))
}


// scheduleButton.addEventListener('click', createAppt()) 

const getAppt = () => {
    axios.get("http://localhost:4002/api/appointments")
    .then(res => console.log(res.data))
    .catch(err => (console.log(err)))
}

    

// document.getElementById("search").onclick = function () {
//     axios.get("http://localhost:4002/api/appointments")
//         .then(res => addToView([res.data]))
//         .catch(err => (err))
// }

// document.getElementById("edit").onclick = function () {
//     axios.put("http://localhost:4002/api/appointments/edit")
//         .then(res (res))
//         .catch(err => (err))
// }

// document.getElementById("delete").onclick = function () {
//     axios.delete("http://localhost:4002/api/appointments/delete")
//         .then(res (res))
//         .catch(err => (err))
// }
    



