const dailySupply = require("../modal/DailySupply");
const mongoose = require("mongoose");

//Add New Supply
const addSupply = async (req, res) => {
  if (req.body) {
    const supply = new dailySupply(req.body);
    await supply
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Supplies
const getallSupplies = async (req, res) => {
  await dailySupply
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular supplier
const getoneSupply = async (req, res) => {
  let supplyID = req.params.id;
  await dailySupply
    .findById(supplyID)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Supplier
const updateSupply = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await dailySupply
      .findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Supplier
const deleteSupply = async (req, res) => {
  await dailySupply
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addSupply,
  getallSupplies,
  getoneSupply,
  updateSupply,
  deleteSupply,
};
