var jwt= require("jsonwebtoken")

exports.loginRequired=function (req,res,next) {
    try{
        var token = req.headers.authorization.split("")[1]
        jwt.verify(token,"secret", function (decode,err) {
            if (decode) {
                next()
            }else{
                res.status(401).json({message:"plase log in"})
            }
        })

    }catch(err){
        res.status(401).json({message:"pls log in"})
    }
}


exports.correctUser = function (req,res,next) {
    try{
        var token= req.headers.authorization.split("")[1]
        jwt.verify(token,"secret",function(decode,err) {
            if (decode&&decode.userId===req.params.id) {
                next()
            }else{
                res.status(401).json({message:"not authorized"})
            }
        })
    }catch(err){
        res.status(401).json()({message:"not authorized"})
    }
        
    }



module.exports=exports