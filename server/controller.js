const appointments = require("./db.json");

const bcrypt = require("bcryptjs");

let globalId = 7

let users = [
  {
    username: "sione",
    email: "sione@Finau.com",
    firstName: "Sione",
    lastName: "Finau",
    password: "sione",
  },
  {
    username: "alexis",
    email: "alexis@Finau.com",
    firstName: "Alexis",
    lastName: "Finau",
    password: "alexis",
  },
  {
    username: "loni",
    email: "loni@Finau.com",
    firstName: "Loni",
    lastName: "Finau",
    password: "loni",
  },
];

module.exports = {
  scheduleAppointment: (req, res) => {
    console.log(req.body);
    let bodyObj = {
      month: req.body.month,
      day: +req.body.day,
      time: req.body.time,
      id: globalId
    }
    appointments.push(bodyObj);
    console.log(appointments);

    globalId++

    res.status(200).send(appointments);
  },
  getAppointment: (req, res) => {
    res.status(200).send(appointments);
  },
  register: (req, res) => {
    console.log(req.body);
    users.push(req.body);
    console.log(users);

    res.status(200).send(req.body);
  },
  login: async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        // const existing = bcrypt.compareSync(password, users[i].password);
        // console.log(existing)
        // if (existing) {
          let userInput = { ...users[i] };
          delete userInput.password;
          res.status(200).send(users[i]);
          console.log("login successful");
          return;
        // }
      }
    }
    res.status(400).send("User not found.");
  },
  
  //appointment card
  deleteAppointment : (req, res) => {
    // console.log('delete endpoint hit')
    let index = appointments.findIndex(elem => elem.id === +req.params.id)
        appointments.splice(index, 1)
        res.status(200).send(appointments)
  }
};


// editAppointment : (req, res) => {

// },

