const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://priyaranjandehury2022:Ul0QopYPwhGRIlFK@cluster0.8wfysty.mongodb.net/paytm');
const UserSchema=new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String

})
const accountSchema=new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:float
})
const db=mongoose.model('User',UserSchema);
const Account=mongoose.model('Account',accountSchema);
module.exports={
    db,Account
}