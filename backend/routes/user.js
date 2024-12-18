const {Router}=require('express');
const router=Router();
const {db}=require("../db");
const {Account}=require("../db");
const {authMiddleware}=require('./middleware');
const jwt = require("jsonwebtoken");
const {jwt_secret}=require("../config");
const {userValidate}=require("./types")
const {validate}=require("./types")
router.post('/signup',async(req,res)=>{
    const validation=userValidate.safeParse(req.body)
    if(!validation.success){
       return res.send("input incoorect");
    }
    else{
        const existUsername = await db.findOne({ username: req.body.username});
        if (existUsername) {
          res.send("username already exist");
        }
        else{
            const username=req.body.username;
            
            const  firstName=req.body.firstName;
            const lastName=req.body.lastName;
            const password=req.body.password;
            try{
                const user= await db.create({    //It does not return null but in case of find it return null,so thats why try and catch
                    username:username,
                    firstName:firstName,
                    lastName:lastName,
                    password:password
                })
                await Account.create({
                  userId:user._id,
                  balance: 1 + Math.random() * 10000
                })
               
              const userId=user._id;
              const token=jwt.sign({userId},jwt_secret);
              res.json({msg:'User created successfully',
                token:token
              })
            }
            catch(err){
                console.log(err)
            }
        }
    }
    
})
router.post("/signin",async(req,res)=>{
    const signvalidate=userValidate.safeParse(req.body);
    if(!signvalidate){
        return res.send("invalid input");
    }
    else{
        const findOne=await db.findOne({username:req.body.username,
            password:req.body.password
        });
        if(findOne){
            const id=findOne._id;
            const token=jwt.sign({id},jwt_secret); 
            return res.json({token:token})
        }
        else{
            return res.status(414).send("No username matched");
        }
    }
})
router.put("/",authMiddleware,async(req,res)=>{
  const validateSuccess=validate.safeParse(req.body);
  if(!validateSuccess.success){
    return res.send("Enter valid input details");
  }
 try{
    console.log(req._id);
    const findUser=await db.findOne({_id:req._id});
    if(!findUser){
        return res.send("no user found");

    }
    else{
        await db.updateOne({_id:req._id},
            {
                $set:{password:req.body.password,firstName:req.body.firstName,lastName:req.body.lastName}
            }
        );
        return res.send("User updated successfully");


    }
 } catch(err){
      console.log(err);
 }
})
router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter||"";
    const users=await db.find({$or:[{
        firstName:{
            "$regex":filter
        }},{
      lastName:{
        "$regex":filter
      }
        }]
    
})
res.json({
    user: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
    }))
})
})
module.exports= router