const router = require("express").Router();
const supplierController = require("../controller/Supplier.Controller");

module.exports = function () {
  router.post("/add", supplierController.addSupplier);
  router.get("/", supplierController.getallSuppliers);
  router.put("/update/:id", supplierController.updateSupplier);
  router.delete("/delete/:id", supplierController.deleteSupplier);

  return router;
};
