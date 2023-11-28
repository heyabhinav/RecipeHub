const express = require("express");
const {login, home} = require("../Function/function");
const router = express.Router();

router.get('/home', home);

module.exports = {router};