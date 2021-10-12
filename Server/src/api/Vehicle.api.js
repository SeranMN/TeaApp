const router = require("express").Router();
const vehicleController = require("../controller/Vehicle.Controller");

module.exports = function () {
  router.post("/add", vehicleController.addVehicle);
  router.get("/", vehicleController.getallVehicles);
  router.get("/get/:id");
  router.put("/update/:id", vehicleController.updateVehicle);
  router.delete("/delete/:id", vehicleController.deleteVehicle);

  //router.post("/search/:id", vehicleController.searchVehicle);
  router.get("/search/:id", vehicleController.searchVehicle);

  return router;
};
