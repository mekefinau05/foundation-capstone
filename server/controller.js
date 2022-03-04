let appointments = [
    {
        id: 1,
        day: 20,
        month: 'Apr',
        time: '7:00am' 
    },
    {
        id: 2,
        day: 17,
        month: 'Apr',
        time: '9:00am'
    }   

]


module.exports = {
    scheduleAppointment : (req, res) => {
        console.log(req.body)
        body = {
            user: userId,
            day: day,
            month: month,
            time: time
        }
        res.status(200).send(req.body)
    
    },
    getAppointment : (req, res) => {
        if (req.body.item) {

            const filteredAppts = appointments.filter((appts) => appts.toLowerCase().includes(req.body.item.toLowerCase()))
            res.status(200).send(filteredAppts)
        }else {
            res.status(200).send(appointments)
        }
        // console.log(req.body)
        // appointments.push(req.body.appointment)
        
        // res.status(200).json(req.body)
    },
    //appointment card
    // editAppointment : (req, res) => {


    // },
    // deleteAppointment : (req, res) => {

    // }
}

