const router = require('express').Router();
const stockoutController = require('../controller/stockout.controller')

module.exports = function () {
  
    router.post("/add", stockoutController.createStockout);
    router.get("/", stockoutController.getAllStockout);
    router.get("/search/:id", stockoutController.Searchstockout);




    return router

}