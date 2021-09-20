const express = require("express");
const cors = require('cors');

const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

const appointmentApi = require("./src/api/appointment.api");
app.use("/appointment", appointmentApi());

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
