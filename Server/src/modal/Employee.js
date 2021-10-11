const mongoose = require('mongoose');

const schema = mongoose.Schema;
const employeeschema = new schema({
    name: {
        type: String,
        required:true
    },
    nic: {
        type: String,
   
        required:true
    },
    address: {
        type: String,
        required:true
    },
    email: {
        type: String,
        
    },
    mobno: {
        type: Number,
        required:true
    },
    
    joinedDate: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required:true
    },
   

    
})
const Employee = mongoose.model("Employee", employeeschema);

module.exports = Employee;