const bcrypt = require("bcryptjs");

let appointments = [
  {
    month: "Mar",
    day: 1,
    time: "7am",
  },
  {
    month: "Apr",
    day: 17,
    time: "9am",
  },
  { month: "Mar", day: 1, time: "9am" },
];

let users = [
  {
    username: "test",
    email: "test@test.com",
    firstName: "test",
    lastName: "test",
    password: "test",
  },
];

module.exports = {
  scheduleAppointment: (req, res) => {
    console.log(req.body);
    appointments.push(req.body);
    console.log(appointments);

    res.status(200).send(req.body);
  },
  getAppointment: (req, res) => {
    res.status(200).send(appointments);
   
  },
  register: (req, res) => {
    console.log(req.body)
    users.push(req.body)
    console.log(users)
    
    res.status(200).send(req.body)
  },
  login: (req, res) => {

    res.status(200).send()
  }

  
};


  //appointment card

  // editAppointment : (req, res) => {

  // },
  // deleteAppointment : (req, res) => {

  // }
