const {Router}=require('express');
const router=Router();
const user=require('./user');
const account=require('./account')

router.use("/user",user);
router.use("/account",account);

module.exports=router