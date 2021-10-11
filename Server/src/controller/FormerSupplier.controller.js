const FormerSupplier = require("../modal/FormerSupplier");
const mongoose = require("mongoose");

//Add New Former Supplier
const addFormerSupplier = async (req, res) => {
  if (req.body) {
    // const supplier = new Supplier(req.body);
    // const image = new Supplier(req.file)
    await FormerSupplier(req.body)
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
const getallFormerSuppliers = async (req, res) => {
  await FormerSupplier.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
    addFormerSupplier,
    getallFormerSuppliers,
}