import userModel from '../Models/Usermodel.js';
import * as userService from '../Service/userService.js';
import { validationResult } from 'express-validator';

export const createUserController = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try {
        const user = await userService.createUser(req.body);
        const token = await user.generateToken();
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



export const loginUserController = async (req, res) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }


    try {
        
const {email,password} = req.body;

const user=  await userModel.findOne({email}).select('+password');

if(!user){
  return  res.status(401).json({error:'Invalid Credentials'});
}


const isValid = await user.isValidPassword(password);


if(!isValid){

    
  return  res.status(401).json({error:'Invalid Credentials'});

}


const token = await user.generateToken();
res.status(200).json({ user, token });

    } catch (error) {

        return  res.status(401).json({error:'Invalid Credentials'});
        
    }

};



export const userprofileController = async (req, res) => {
console.log(req.user);

res.status(200).json({user:req.user});

}