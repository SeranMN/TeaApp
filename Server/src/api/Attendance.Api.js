const router = require('express').Router();
const attendanceController = require('../controller/Attendance.controller')
module.exports = function () {
   router.get("/:id",attendanceController.getAtendancebyid);
    router.post("/arived",attendanceController.setArrivedTime);
    router.put("/leave/:id", attendanceController.setLeaveTime);
    // router.delete("/delete/:id", employeeController.deleteEmployee);
    // //router.get("/count",employeeController.countEmployee)
     router.get("/date/:id", attendanceController.getAtendancebyDate);
    return router
}