const router = require("express").Router();
const vehicleController = require("../controller/Vehicle.Controller");

module.exports = function () {
  router.post("/add", vehicleController.addVehicle);
  router.get("/", vehicleController.getallVehicles);
  router.get("/get/:id", vehicleController.getoneVehicle);
  router.put("/update/:id", vehicleController.updateVehicle);
  router.delete("/delete/:id", vehicleController.deleteVehicle);

  return router;
};