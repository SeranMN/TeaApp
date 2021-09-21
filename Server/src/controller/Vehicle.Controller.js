const Vehicle = require("../modal/Vehicle");
const mongoose = require("mongoose");

//Add New Vehicle
const addVehicle = async (req, res) => {
  if (req.body) {
    const vehicle = new Vehicle(req.body);
    await vehicle
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
        //success:"post successful"
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All vehicles
const getallVehicles = async (req, res) => {
  await Vehicle.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular vehicle
const getoneVehicle = async (req, res) => {
  let id = req.params.id;
  await Vehicle.findById(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Supplier
const updateVehicle = async (req, res) => {
  console.log(req.params.id);
  if (req.body) {
    let id = req.params.id;
    await Vehicle.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Vehicle
const deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addVehicle,
  getallVehicles,
  getoneVehicle,
  updateVehicle,
  deleteVehicle,
};
