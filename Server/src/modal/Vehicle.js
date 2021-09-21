const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

     vid: {
         type :String,
         required: true
     },
     vtype: {
         type : String,
         required:true
     },
     vmodel:{
        type : String,
        required:true
    },
    ftype:{
        type : String,
        required:true
    },
    owner:{
        type : String,
        required:true
    }

})

const Vehicle = mongoose.model("Vehicle",vehicleSchema);

module.exports = Vehicle;
