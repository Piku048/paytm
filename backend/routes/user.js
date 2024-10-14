const {Router}=require('express');
const router=Router();
const db=require("../db");
const jwt = require("jsonwebtoken");
const {jwt_secret}=require("../config");
const userValidate=require("./types")
router.post('/signup',async(req,res)=>{
    const validation=userValidate.safeParse(req.body)
    if(!validation.success){
       return res.send("input incoorect");
    }
    else{
        const existUsername = await db.findOne({ username: req.body.username});
        if (existUsername.success) {
          res.send("username already exist");
        }
        else{
            const username=req.body.username
            const password=req.body.password
            const  firstName=req.body.firstName
            const lastName=req.body.lastName
            try{
                const user= await db.create({    //It does not return null but in case of find it return null,so thats why try and catch
                    username:username,
                    firstName:firstName,
                    lastName:lastName,
                    password:password
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
        const findOne=db.findOne({username:req.body.username,
            password:req.body.password
        });
        if(findOne.success){
            const id=findOne._id;
            const token=jwt.sign({id},jwt_secret);
            return res.json({token:token})
        }
        else{
            return res.status(414).send("No username matched");
        }
    }
})
module.exports=router