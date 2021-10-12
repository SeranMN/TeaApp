const router = require('express').Router();
const FormerEmployeeController = require('../controller/formerEmp.controller')
module.exports = function () {
    router.post("/add", FormerEmployeeController.createEmployee);
     router.get("/", FormerEmployeeController.getAllEmployee);
    return router
}

