const router = require("express").Router();
const ProductStockController = require('../controller/productStock.controller');

module.exports = function (){
    router.post("/create", ProductStockController.createProductStock);
    router.delete("/delete/:id", ProductStockController.deleteProductStock);
    router.get("/", ProductStockController.getAllProductStocks);
    return router;
}