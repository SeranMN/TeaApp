const router = require('express').Router();
const employeeController = require('../controller/employee.controller')
module.exports = function () {
    router.get("/", employeeController.getAllEmployee);
    router.post("/add", employeeController.createEmployee);
    router.put("/update/:id", employeeController.updateEmployee);
    router.delete("/delete/:id", employeeController.deleteEmployee);
    //router.get("/count",employeeController.countEmployee)
    router.get("/id/:id", employeeController.getEmployeeByID);
    router.get("/search/:id", employeeController.serachEmployee);
    router.get("/email/:id", employeeController.getEmployeeByEmail);
    return router
}





