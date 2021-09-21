const express = require("express");
//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv=require('dotenv');
const connectDB = require('./src/config/config');
const app = express();
//require("dotenv").config();



//import routes


const PORT = process.env.PORT || 5000;
//app middleware
app.use(bodyParser.json());
app.use(cors());





const VehicleApi = require("./src/api/Vehicle.api.js");
app.use("/vehicle", VehicleApi());

const DeliveryApi = require("./src/api/Delivery.api.js");
app.use("/delivery", DeliveryApi());




//const PORT = 5000;
//const DB_URL = "mongodb+srv://aws123:aws12345@vehicle.41xpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

/* mongoose.connect(DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}) */
connectDB();

/* .then(() =>{
  console.log('DB Connected');
})
.catch((err) =>console.log('DB connection erro',err)); */
const vehicleapi=require('./src/api/Vehicle.api');
app.use ("/vehicle",vehicleapi())

const deliveryapi=require('./src/api/Delivery.api');
app.use ("/delivery",deliveryapi());

app.listen(PORT, () =>{
  console.log(`app is running on ${PORT}`);
});



