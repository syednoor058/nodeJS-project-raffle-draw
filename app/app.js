require("dotenv").config("../.env");
const express = require("express");
const app = express();

app.use(express.json());
app.use(require('./route'));
module.exports = app;