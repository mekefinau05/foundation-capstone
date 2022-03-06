let appointments = [
  {
    id: 1,
    day: 1,
    month: "Apr",
    time: "7:00am",
  },
  {
    id: 2,
    day: 17,
    month: "Apr",
    time: "9:00am",
  },
];

module.exports = {
  scheduleAppointment: (req, res) => {
    console.log(req.body);
    // console.log(res)
    // body = {
    //     user: userId,
    //     day: day,
    //     month: month,
    //     time: time
    // }

    appointments.push(req.body);
    console.log(appointments);
    res.status(200).send(req.body);
  },
  getAppointment: (req, res) => {
    res.status(200).send(appointments)
    
    
    
    // if (req.body.item) {
    //   const filteredAppts = appointments.filter((appts) =>
    //     appts.toLowerCase().includes(req.body.item.toLowerCase())
    //   );
    //   res.status(200).send(filteredAppts);
    // } else {
    //   res.status(200).send(appointments);
    // }
    // console.log(req.body)
    // appointments.push(req.body.appointment)

    // res.status(200).json(req.body)
  },
  //appointment card
  // editAppointment : (req, res) => {

  // },
  // deleteAppointment : (req, res) => {

  // }
};
