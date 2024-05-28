const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        unique:true,
        
    },
    password:{
        type:String,
        reuired:true,
    },
});
module.exports=mongoose.model("User",userSchema)