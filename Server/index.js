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

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
