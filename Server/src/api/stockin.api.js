const router = require('express').Router();
const stockinController = require('../controller/stockin.controller')

module.exports = function () {
  
    router.post("/add", stockinController.createStockin);
    router.get("/", stockinController.getAllStockin);
    router.get("/sum", stockinController.getsumstockin);
    router.get("/search/:id", stockinController.Searchstockin);



    return router

}