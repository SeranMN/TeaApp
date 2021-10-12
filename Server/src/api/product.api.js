const router = require("express").Router();
const ProductController = require('../controller/product.controller');


module.exports = function (){
    router.post("/create", ProductController.createProduct);
    router.put("/update/:id", ProductController.updateProduct);
    router.delete("/delete/:id", ProductController.deleteProduct);
    router.get("/", ProductController.getAllProducts);
    return router;
}