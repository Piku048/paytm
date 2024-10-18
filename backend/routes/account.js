const {Router}=require("express");
const router=Router();
const {authMiddleware}=require("./middleware")
const {Account}=require("../db");
router.get("/balance",authMiddleware,async(req,res)=>{
   const userBalance=await Account.findOne({
    userId:req._id
   })
   res.json({balance:userBalance.balance})
});
module.exports=router