const router = require("express").Router();
const deliveryController = require("../controller/Delivery.Controller");

module.exports = function () {
  router.post("/add", deliveryController.addDelivery);
  router.get("/", deliveryController.getallDeliveries);
  router.get("/get/:id", deliveryController.getoneDelivery);
  router.put("/update/:id", deliveryController.updateDelivery);
  router.delete("/delete/:id", deliveryController.deleteDelivery);

  return router;
};