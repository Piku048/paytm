const zod=require('zod');
const userValidate=zod.object({
    username:zod.email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.number().min(5)
})
module.exports=userValidate