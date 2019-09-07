var mongoose = require("mongoose")
var User = require("./user")


var messageSchema = new mongoose.Schema({
    text:{
        type: "string",
        required: true,
        maxlength: 160
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
      
    },
},{
    timestamps:true
   
});




let Message = mongoose.model("Message", messageSchema)

module.exports = Message


