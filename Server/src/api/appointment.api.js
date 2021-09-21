const express = require('express');
const router = express.Router();
const AppointmentController = require('../controller/appointment.controller');

module.exports = function (){
    router.get('/:name', AppointmentController.getAppointmentsByUser);
    router.post('/add', AppointmentController.addAppointment);
    router.put('/update/:id', AppointmentController.updateAppointment);
    router.delete('/delete/:id', AppointmentController.deleteAppointment);
    router.get('/', AppointmentController.getAllAppointments);
    return router;
}