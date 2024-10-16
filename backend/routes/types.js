const zod=require('zod');
const userValidate=zod.object({
    username:zod.email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.number().min(5)
})
const validate=zod.object({
    password:zod.number().min(5).optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})
module.exports={userValidate,validate}