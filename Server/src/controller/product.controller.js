const Product = require("../modal/product.model");
const mongoose = require("mongoose");
const multer = require("multer");
const { Router } = require("express");

//Create a Product Item
const createProduct = async (req, res) => {
    if (req.body) {
      const product = new Product(req.body);
      await product
        .save()
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    }
  };

//get All Product Items
const getAllProducts = async (req, res) => {
    await Product.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
};



//update Product with id
const updateProduct = async (req, res) => {
    console.log(req.body);
    if (req.body) {
        let id = req.params.id;
        await Product.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send(error);
            });
    }
};


//delete Product Item
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    updateProduct,
}