const baseURL = `http://localhost:4002/`;

const apptContainer = document.getElementById("apptContainer");

const searchButton = document.querySelector("#search");
const scheduleButton = document.querySelector("#scheduled");

// const editButton = document.querySelector("#edit");
const deleteButton = document.querySelector("#delete");

//variables
const timeSelect = document.querySelector("#timeSelect");
const monthSelect = document.querySelector("#monthSelect");
const daySelect = document.querySelector("#daySelect");


let selectedTimeOption = timeSelect.options[timeSelect.selectedIndex].innerHTML;
let monthSelectedOption = monthSelect.options[monthSelect.selectedIndex].innerHTML;
let daySelectedOption = daySelect.options[daySelect.selectedIndex].innerHTML;

let appointment = {
  day: daySelectedOption,
  month: monthSelectedOption,
  time: selectedTimeOption,
};

timeSelect.addEventListener("change", () => {
  selectedTimeOption = timeSelect.options[timeSelect.selectedIndex].innerHTML;
  appointment = {
    day: daySelectedOption,
    month: monthSelectedOption,
    time: selectedTimeOption,
  };
  // console.log(selectedTimeOption.innerHTML)
});

monthSelect.addEventListener("change", () => {
  monthSelectedOption =
    monthSelect.options[monthSelect.selectedIndex].innerHTML;
  appointment = {
    day: daySelectedOption,
    month: monthSelectedOption,
    time: selectedTimeOption,
  };
});

daySelect.addEventListener("change", () => {
  daySelectedOption = daySelect.options[daySelect.selectedIndex].innerHTML;
  appointment = {
    day: daySelectedOption,
    month: monthSelectedOption,
    time: selectedTimeOption,
  };
});

const createAppt = (appointment) => {
  // console.log(appointment)
  axios
    .post("http://localhost:4002/api/appointments", appointment)
    .then((res) => {
      console.log(res.data);
      displayAppt(res.data);
    })
    .catch((err) => console.log(err));
};

const deleteAppt = (id) => {
  // console.log('front end delete hit')
  axios
    .delete(`http://localhost:4002/api/deleteAppt/${id}`)
    .then((res) => {
      console.log(res.data);
     displayAppt(res.data) 
    })
    .catch((err) => console.log(err));
};

function displayAppt(arr) {
  apptContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
      scheduleAppt(arr[i])
  }
}

function scheduleAppt(appt) {
    apptContainer.innerHTML = ''
  const appointmentCard = document.createElement("div");
  appointmentCard.classList.add("appt-card");
  appointmentCard.innerHTML = `
  <div id="date"> 
  <h5>${appt.month}</h5> <h5>${appt.day}</h5> <h5>${appt.time}</h5> 
  </div>
  <div id=cardButtons>
  <button class="cardButton" id="delete" onclick="deleteAppt(${appt.id})"
  >Delete</button>
  <button class="cardButton" id="edit" onclick="edit(${appt.id}">Edit</button>
  </div>
  `;

  apptContainer.appendChild(appointmentCard);

  
}

let filteredAppt = null;

const getAllAppt = () => {
  console.log(appointment);
  axios
    .get("http://localhost:4002/api/appointments")
    .then((res) => {
      appointments = res.data;
        displayAppt(res.data)
      
    })
    .catch((err) => console.log(err));
};

const getAppt = () => {
  console.log(appointment);
  axios
    .get("http://localhost:4002/api/appointments")
    .then((res) => {
      appointments = res.data;
      filteredAppt = appointments.filter(
        (item) => item.month === monthSelectedOption 
      );
    
      getAppts(filteredAppt);
    })
    .catch((err) => console.log(err));
};

function getAppts(appt) {
  console.log(appt);
    apptContainer.innerHTML = ''
  appt.map(item => {
      const appointmentCard = document.createElement("div");
      appointmentCard.classList.add("appt-card");
      appointmentCard.innerHTML = `<h5>${item.month}</h5> <h5>${item.day}</h5> <h5>${item.time}</h5>`;
      apptContainer.appendChild(appointmentCard);

  })
}


// getAllAppt()