const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ProductSchema = new schema({
    ProductID: { type: String, required: true },
    Name: { type: String, required: true},
    weight: {type:Number, required:true},
    price: {type:Number, required:true},
    imageURL: { type: String, }
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;