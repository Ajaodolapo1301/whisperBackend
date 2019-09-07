var express = require("express");
var router = express.Router();
var helper = require("../helper/auth")




router.post("/register", helper.register)
router.post("/signin" , helper.signin)


module.exports = router
