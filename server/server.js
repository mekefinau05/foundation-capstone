//require('dotenv').config()
const express = require("express");
const cors = require("cors");
const ctrl = require('./controller.js')

const app = express();

const port = `http://localhost:4002/`

app.use(cors());

app.use(express.json()); 


// appointment html
app.post("/api/appointments", ctrl.scheduleAppointment)
app.get("/api/appointments", ctrl.getAppointment)

//appointment card
// app.put("api/editAppt", ctrl.editAppointment)
// app.delete("api/deleteAppt", ctrl.deleteAppointment)

//login
app.post("/api/login", ctrl.register)
app.post("/api/login", ctrl.login)


app.listen(4002, () => console.log("Server running on 4002"));

