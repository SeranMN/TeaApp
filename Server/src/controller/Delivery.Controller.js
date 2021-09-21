const Delivery = require("../modal/Delivery");
const mongoose = require("mongoose");

//Add New Delivery
const addDelivery = async (req, res) => {
  if (req.body) {
    const delivery = new Delivery(req.body);
    await delivery
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Deliveries
const getallDeliveries = async (req, res) => {
  await Delivery.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular Delivery
const getoneDelivery = async (req, res) => {
  let id1 = req.params.id;
  await Delivery.findById(id1)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Delivery
const updateDelivery = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Delivery.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Delivery
const deleteDelivery = async (req, res) => {
  await Delivery.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addDelivery,
  getallDeliveries,
  getoneDelivery,
  updateDelivery,
  deleteDelivery,
};
