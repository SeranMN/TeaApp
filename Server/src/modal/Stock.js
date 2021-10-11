const mongoose = require('mongoose');

const schema = mongoose.Schema;
const stockschema = new schema({
    productID: {
        type: String,
        unique:true,
        
        
    },
    ProductName: {
        type: String,
        unique:true,
        
        
    },
    SectionNo: {
        type: String,
        
    },
    Amount:{
        type:String,
        

    },
   
    
    Date: {
        type:String ,
       
    },
    
})
const Stock = mongoose.model("Stock", stockschema);

module.exports = Stock;