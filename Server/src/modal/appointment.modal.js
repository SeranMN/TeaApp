const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AppointmentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    position: { type: String, required: true},
    date: { type: String, required: true},
    time: { type: String, required:true},
    concern: { type: String, required:true}
});

const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;