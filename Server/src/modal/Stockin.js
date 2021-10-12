const mongoose = require('mongoose');

const schema = mongoose.Schema;
const stockinschema = new schema({
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
const Stockin = mongoose.model("Stockin", stockinschema);

module.exports = Stockin;