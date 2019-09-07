var express =require("express")
var bcrypt = require("bcryptjs")
var bodyParser = require("body-parser")
var cors = require("cors")
var db =require("./models")
var app=express()
var authRoute = require("./routes/auth")
var messageRoute = require("./routes/message")
var auth=require("./middleware/auth")


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.get("/" ,function(req,res) {
    res.send("ruka leave me alone!!!!")
})


app.use("/api/auth", authRoute)
app.use ("/api/users/:id/messages", auth.loginRequired,auth.correctUser, messageRoute )

app.get("/api/messages",function(req,res,next) {
    db.Message.find().sort({createAt:"desc"})
    .populate("userId",{username:true,profileimageUrl:true,})
    .then(function(messages,) {
        res.status(200).json(messages)
    }).catch(function (err) {
        res.status(400).json(err)
    })
})





app.listen(3001,function() {
    console.log("server up")
})
