const express = require('express');
const { name, getName } = require('../controller/shreeyacontroller');
const route = express();


route.get("/name", getName);


module.exports = route;