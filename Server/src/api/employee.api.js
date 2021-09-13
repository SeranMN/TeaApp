const router = require('express').Router();
const employeeController = require('../controller/employee.controller')
module.exports = function () {
    router.get("/", employeeController.getAllEmployee);
    router.post("/add", employeeController.createEmployee);
    router.put("/update/:id", employeeController.updateEmployee);
    router.delete("/delete/:id", employeeController.deleteEmployee);
    return router
}





