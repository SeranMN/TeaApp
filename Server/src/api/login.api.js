const express = require('express');
const router = express.Router();
const LoginController = require('../controller/login.controller');

module.exports = function (){
    router.get('/:email', LoginController.userLogin);
    router.post('/add', LoginController.add);
    router.put('/update/:id', LoginController.updateUser);
    router.delete('/delete/:id', LoginController.deleteUser);
    
    return router;
}