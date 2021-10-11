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

const apprappointmentApi = require("./src/api/apprAppointment.api");
app.use("/apprAppointment", apprappointmentApi());

const customerApi = require("./src/api/customer.api");
app.use("/customer", customerApi());

const feedbackApi = require("./src/api/feedback.api");
app.use("/feedback", feedbackApi());

const loginApi = require("./src/api/login.api");
app.use("/login", loginApi());
const stockApi = require("./src/api/stock.api");
app.use("/stock", stockApi());
const supplierAPI = require("./src/api/Supplier.api");
app.use("/supplier", supplierAPI());

const employeeApi = require("./src/api/employee.api");
app.use("/employee", employeeApi());

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
