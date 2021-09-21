const mongoose = require('mongoose');

const schema = mongoose.Schema;
const stockschema = new schema({
    productID: {
        type: String,
        required:true
    },
    ProductName: {
        type: String,
   
        required:true
    },
    SectionNo: {
        type: String,
        required:true
    },
   
    
    amount: {
        type: Number,
        required:true
    },
    Date: {
        type:String ,
        required:true
    },
    
})
const Stock = mongoose.model("Stock", stockschema);

module.exports = Stock;