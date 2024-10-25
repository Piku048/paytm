const mongoose=require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://priyaranjandehury2022:Ul0QopYPwhGRIlFK@cluster0.8wfysty.mongodb.net/paytm');
const UserSchema=new mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String

})
const accountSchema=new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:Number
})
const db=mongoose.model('User',UserSchema);
const Account=mongoose.model('Account',accountSchema);
module.exports={
    db,Account
}