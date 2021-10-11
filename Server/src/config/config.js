const mongoose = require("mongoose");
//to get packages and assign into variables.

const URI = "mongodb://localhost:27017/teaApp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected");
}


module.exports = connectDB;