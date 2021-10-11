const ProductStock = require("../modal/productStock.modal");
const mongoose = require("mongoose");
//Create a Food Item
const createProductStock = async (req, res) => {
    if (req.body) {
      const productStock = new ProductStock(req.body);
      await productStock
        .save()
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    }
  };

//get All Food Items
const getAllProductStocks = async (req, res) => {
    await ProductStock.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
};


//delete Food Item
const deleteProductStock = async (req, res) => {
  await ProductStock.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
    createProductStock,
    //getProductFromName,
    getAllProductStocks,
    deleteProductStock,
    
}
