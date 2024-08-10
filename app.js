require("dotenv").config();
const express = require("express");
const { testConnection } = require("./config/database.js");
const router = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

testConnection();
app.use("/", router);
module.exports = app;
