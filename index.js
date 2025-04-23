const express = require('express');
const app = express();
const cors = require("cors");

require("dotenv").config();
port=process.env.PORT || 8080;
app.use(express.json())
require("./database/connection.js");
app.use(cors());
const testroute = require("./routes/testroute.js");
const shreeyaroute = require("./routes/shreeyaroute.js");
const categoryroute=require("./routes/CategoryRoute.js");
const productroute = require("./routes/ProductRoutes.js");



app.listen(port,()=>{
    console.log(`Server is running on port ${port} `);
});

app.use(testroute);
app.use(shreeyaroute);
app.use("/category",categoryroute);
app.use("/product", productroute);


