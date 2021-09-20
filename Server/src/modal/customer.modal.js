const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    contactNo: {type:Number, required:true},
    NIC: {type:String, required:true},
    address: {type:String, required:true},
    //imageURL: { type: String, required: true},
    //password: {type:String, required:true},
    //confirmPassword: {type:String, required:true}
});

const Customer = mongoose.model('customer', CustomerSchema);
module.exports = Customer;