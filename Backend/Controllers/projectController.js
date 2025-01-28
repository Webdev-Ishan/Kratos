import { validationResult } from 'express-validator';
import userModel from '../Models/Usermodel.js';
import * as projectService from '../Service/projectService.js';

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

try {
    
    const loggeduser = await userModel.findOne({email:req.user.email});

    const allprojects= await projectService.getAllProjectByUserId({userId:loggeduser._id});


    return res.status(200).json({projects:allprojects});

} catch (error) {

    res.status(400).json({error:error.message})
}

}



export const addUserToProject = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { projectId, users } = req.body;

    const loggedInUser = await userModel.findOne({
      email: req.user.email
    });

    const project = await projectService.addUsersToProject({
      projectId,
      users,
      userId: loggedInUser._id
    });

    return res.status(200).json({ project });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

export const getAllprojects = async (req, res) => {

  const {projectId} = req.params;

  try {
    

    const project = await projectService.getAllproject({projectId});

return res.status(200).json({project})

  } catch (error) {
    
    res.status(400).json({error:error.message})
    
  }
}