const express = require("express");
const { home } = require("../middleware/home.js");
const { registration } = require("../middleware/registration.js");
const { login } = require("../middleware/login.js");
const router = express.Router();
router.get("/", home);
router.post("/registration", registration);
router.get("/login", login);
module.exports = router;
