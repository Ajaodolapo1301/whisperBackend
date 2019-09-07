var mongoose = require ("mongoose")

mongoose.set("debug",true)
mongoose.connect("mongodb://localhost/whisper")


mongoose.Promise = Promise 

module.exports.User =require("./user")
module.exports.Message =require("./message")