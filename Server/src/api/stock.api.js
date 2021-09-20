const router = require('express').Router();
const stockController = require('../controller/stock.controller')

module.exports = function () {
    router.get("/", stockController.getAllStock);
    router.post("/add", stockController.createStock);
    router.put("/update/:id", stockController.updateStock);
    router.delete("/delete/:id", stockController.deleteStock);



    return router

}