import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true,
        trim : true,
        lowercase : true,
        minLength : [6, 'Email should be atleast 6 characters long'],
        maxLength : [64, 'Email should be atmost 64 characters long']
    },
    password:{
        type:String,
        select:false,
    }
})

userSchema.statics.hashPassword = async function(password){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.methods.isValidPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function(){
    return jwt.sign({email:this.email}, process.env.JWT_SECRET);
}


const userModel = mongoose.model('User', userSchema);

export default userModel;