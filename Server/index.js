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

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
