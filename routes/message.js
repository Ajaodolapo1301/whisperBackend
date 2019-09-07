var express =require ("express")
var router = express.Router({mergeParams:true});
var db =require("../models")
var jwt = require("jsonwebtoken")
var helper = require("../helper/message")

router.post("/", helper.createMessage)


module.exports = router