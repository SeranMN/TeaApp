const router = require("express").Router();
const formerSupplierController = require("../controller/FormerSupplier.controller");

module.exports = function () {
  router.post("/add", formerSupplierController.addFormerSupplier);
  router.get("/", formerSupplierController.getallFormerSuppliers);

  return router;
};
