const router = require("express").Router();
const apprAppointmentController = require("../controller/apprAppointment.controller");

module.exports = function () {
  router.post("/add", apprAppointmentController.addapprAppointment);
  router.get("/", apprAppointmentController.getallapprAppointments);

  return router;
};