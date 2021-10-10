const Appointment = require("../modal/appointment.modal");
const mongoose = require('mongoose');

//Make an appointment
const addAppointment = async (req, res) => {
    if (req.body) {
        const appointment = new Appointment(req.body);
        await appointment.save()
            .then((data) => {res.status(200).send({data: data});})
            .catch((err) => {res.status(500).send(err);});
    }
};

//get All Appointments
const getAllAppointments = async (req, res) => {
    await Appointment.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//get Appointments for selected user
const getAppointmentsByUser = async (req, res) => {
    await Appointment.find({'userId': req.params.id}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

//update Appointments with id
const updateAppointment = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await Appointment.findOneAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}

//delete Appointments
const deleteAppointment = async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };

module.exports = {
    addAppointment,
    getAppointmentsByUser,
    getAllAppointments,
    updateAppointment,
    deleteAppointment,
}


