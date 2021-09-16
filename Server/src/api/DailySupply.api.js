const router = require("express").Router();
const dailySupplyController = require("../controller/DailySupply.Controller");

module.exports = function () {
  router.post("/add", dailySupplyController.addSupply);
  router.get("/", dailySupplyController.getallSupplies);
  router.get("/get/:id", dailySupplyController.getoneSupply);
  router.put("/update/:id", dailySupplyController.updateSupply);
  router.delete("/delete/:id", dailySupplyController.deleteSupply);

  return router;
};
