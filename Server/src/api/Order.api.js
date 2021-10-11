const router = require('express').Router();
const orderController = require('../controller/Order.controller')
module.exports = function () {
    router.get("/", orderController.getAllOrder);
    router.post("/add", orderController.createOrder);
    router.put("/update/:id", orderController.updateOrder);
    router.delete("/delete/:id", orderController.deleteOrder);
    router.get("/search/:id", orderController.Searchorder);
    router.put("/status/:id", orderController.setStatus);
   
    return router
}