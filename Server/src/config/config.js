const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/teaApp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected");
    
}


module.exports = connectDB;