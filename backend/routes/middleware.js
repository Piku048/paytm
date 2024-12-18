const {jwt_secret}=require("../config")
const jwt = require("jsonwebtoken");
async function authMiddleware(req,res,next){
    const token=req.headers.authorization;
    if(!token){
        return res.send("Token not available");

    }
   try{
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,jwt_secret);
    if(decodedValue.userId){
        req._id = decodedValue.userId;
        next()
    }
    else{
        return res.send("username missing");
    }
   }catch(err){
    res.status(403).json({
        msg:err
    });
   }
}
module.exports= {authMiddleware}