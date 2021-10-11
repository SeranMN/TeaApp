const mongoose = require("mongoose");

const schema = mongoose.Schema;
const ProductStockSchema = new schema({
    //itemCode: { type: String, required: true },
    ProductID: { type: String, required: true},
    //description: { type: String, required: true},
    
    Quantity: {type:Number, required:true},
    Date: {type:String, required:true},
    
});

const ProductStock = mongoose.model("productStock", ProductStockSchema);
module.exports = ProductStock;