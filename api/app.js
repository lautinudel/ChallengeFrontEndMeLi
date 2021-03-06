const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

const routes = require('./routes');
app.use('/api', routes);

module.exports = app;