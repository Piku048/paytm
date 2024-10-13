const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://priyaranjandehury2022:Ul0QopYPwhGRIlFK@cluster0.8wfysty.mongodb.net/paytm');
const UserSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    password:String

})
const User=mongoose.model('User',UserSchema);
module.exports={
    User
}