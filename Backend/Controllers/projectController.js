import * as projectService from '../Service/projectService.js';
import userModel from "../Models/Usermodel.js";
import { validationResult } from 'express-validator';


export const createProjectController = async (req, res) => {

const error = validationResult(req);

if(!error.isEmpty()){
    return res.status(400).json({error:error.array()})

}

try {
    
    const {name} = req.body;
    const loggedinuser = await userModel.findOne({email:req.user.email});
    const userId = loggedinuser._id;
    const project = await projectService.CreateProject(name,userId);
    
    res.status(201).json({ project });


} catch (error) {

    res.status(400).json({error:error.message})

}



}




export const getProjectsController = async (req, res) => {


    
}