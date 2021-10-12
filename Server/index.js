const express = require("express");
const cors = require('cors');

const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const ProductAPI = require("./src/api/product.api");
const ProductStockAPI = require("./src/api/productStock.api");
const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());
 app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
//  app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.use("/product", ProductAPI());
app.use("/productStock", ProductStockAPI());
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

const stockinApi = require("./src/api/stockin.api");
app.use("/stockin", stockinApi());

const stockoutApi = require("./src/api/stockout.api");
app.use("/stockout", stockoutApi());

const supplierAPI = require("./src/api/Supplier.api");
app.use("/supplier", supplierAPI());

const employeeApi = require("./src/api/employee.api");
app.use("/employee", employeeApi());

const dailySupplyAPI = require("./src/api/DailySupply.api");
app.use("/dailysupply", dailySupplyAPI());

const formerSupplierAPI = require("./src/api/FormerSupplier.api");
app.use("/formersupplier", formerSupplierAPI());
const atendanceApi = require("./src/api/Attendance.Api")
app.use("/attendance", atendanceApi());

const formerEmpAPI = require("./src/api/formerEmp.api")
app.use("/formerEmp",formerEmpAPI())

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
