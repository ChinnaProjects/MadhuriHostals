require("dotenv").config();
const express = require("express");
const { testConnection } = require("./config/database.js");
const router = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
const corsOptions = {
  origin: "https://madhuri-hostals-ui.vercel.app", // Your frontend URL on Vercel

  methods: ["GET", "POST"], // Allow specific methods
};

app.use(cors(corsOptions));

// Rest of your existing app configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

testConnection();
app.use("/", router);
module.exports = app;
