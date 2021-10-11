const mongoose = require('mongoose');

const schema = mongoose.Schema;
const stockoutschema = new schema({
    productName: {
        type: String,
        required:true
    },
    Amount: {
        type: String,
        required:true
    },
    
    Date: {
        type:String ,
        required:true
    },

    SpecialNote: {
        type: String,
        required:true
    },
    
})
const Stockout = mongoose.model("Stockout", stockoutschema);

module.exports = Stockout;