const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({

     did: {
         type :String,
         required: true
     },
     route: {
         type : String,
         required:true
     },
     date:{
        type : String,
        required:true
    },
    tea:{
        type : String,
        required:true
    },
    distance:{
        type : String,
        required:true
    },
    driver:{
        type : String,
        required:true
    }

})

const Delivery = mongoose.model("Delivery",deliverySchema);

module.exports = Delivery;
