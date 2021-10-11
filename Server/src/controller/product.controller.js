const Product = require("../modal/product.model");
const mongoose = require("mongoose");
const multer = require("multer");
const { Router } = require("express");
//Create a Food Item

// const storage = multer.diskStorage({
//   destination:(req, file, callback) => {
//     callback(null, ".../Client/public/images/");
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   }
// })
// const upload = multer({storage: storage});
// Router.post("/create", upload.single("imageURL"),async (req, res) => {
//   const createProduct  = async (req, res) => {
//   if (req.body) {
//     const product = new Product({
//       ProductID: req.body.ProductID,
//       Name: req.body.Name,
//       weight: req.body,weight,
//       price: req.body.price,
//       imageURL: req.file.originalname
//     });
//     await product
//       .save()
//       .then((data) => {
//         res.status(200).send({ data: data });
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   }
// };

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

//get All Food Items
const getAllProducts = async (req, res) => {
    await Product.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
};

//search for food item
//const getProductFromName = async (req, res) => {
    // await Food.find({'submitter.userId': req.params.id}, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.send(result);
    //     }
    // })
//};

//update food with id
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


// const updateProduct = async (req, res) => {
//   console.log(req.body);
//   if (req.body) {
//       let id = req.params.id;
//       await Product.findByIdAndUpdate(id, req.body)
//           .then(data => {
//               res.status(200).send(data);
//           })
//           .catch(err => {
//               res.status(500).send(error);
//           });
//   }
// };
//delete Food Item
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
    //getProductFromName,
    getAllProducts,
    deleteProduct,
    updateProduct,
}