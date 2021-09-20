const router = require('express').Router();
const orderController = require('../controller/Order.controller')
module.exports = function () {
    router.get("/", orderController.getAllOrder);
    router.post("/add", orderController.createOrder);
    router.put("/update/:id", orderController.updateOrder);
    router.delete("/delete/:id", orderController.deleteOrder);
   
    return router
}