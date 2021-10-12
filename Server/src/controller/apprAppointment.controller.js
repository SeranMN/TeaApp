const apprAppointment = require("../modal/apprAppointment");
const mongoose = require("mongoose");

//Add New apprAppointment
const addapprAppointment = async (req, res) => {
  if (req.body) {
    
    await apprAppointment(req.body)
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Former Suppliers
const getallapprAppointments = async (req, res) => {
  await apprAppointment.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
    addapprAppointment,
    getallapprAppointments,
}