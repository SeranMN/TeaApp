const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const apprAppointmentSchema = new Schema({
    name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  concern: {
    type: String,
    required: true,
  },
});

const apprAppointment = mongoose.model("apprAppointment", apprAppointmentSchema);

module.exports = apprAppointment;