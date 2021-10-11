const mongoose = require('mongoose');

const schema = mongoose.Schema;
const orderschema = new schema({
    
    firstName: {
        type: String,
        //required:true
    },
    lastName: {
        type: String,
        //required:true
    },
    address: {
        type: String,
        //required:true
    },
    email: {
        type: String,
        
    },
    contactNo: {
        type: Number,
        //required:true
    },
    
    city: {
        type: String,
        //required:true
    },
    region: {
        type: String,
        //required:true
    },
    postalCode: {
        type: Number,
        //required:true    
    },
    quantity: {
        type: Number,
        //required:true    
    },
    subTotal: {
        type: Number,
        //required:true    
    },
    productName: {
        type: String,
       //required:true    
    },
    unitPrice: {
        type: String,
        //required:true    
    },
    status: {
        type: String,
        //required:true    
    },


    
})
const Order = mongoose.model("Order", orderschema);

module.exports = Order;