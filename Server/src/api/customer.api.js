const express = require('express');
const router = express.Router();
const CustomerController = require('../controller/customer.controller');

module.exports = function (){
    router.post('/user', CustomerController.profileDetails);
    router.post('/register', CustomerController.registerCustomer);
    router.put('/update/:id', CustomerController.updateCustomer);
    router.delete('/delete/:id', CustomerController.deleteCustomer);
    router.get('/', CustomerController.getAllCustomers);
    return router;
}