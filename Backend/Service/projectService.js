import Project from "../Models/Projectmodel.js";
import ProjectModel from "../Models/Projectmodel.js";
import mongoose from 'mongoose';

export const CreateProject = async (name, userId) => {

if(!name || !userId){
    throw new Error('Name of project and UserId are required');

}
 
let project;
try {
   
    project = await ProjectModel.create({
        name,
        user:[userId]
    });
} catch (error) {
    if(error.code === 11000){
        throw new Error('Project with this name already exists');
    }
    throw new Error('Project namealready exist');
}

return project;

};



export const addUsersToProject = async ({ projectId, users, userId }) => {
  if (!projectId) {
    throw new Error('projectId is required');
  }

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    throw new Error('Invalid projectId');
  }

  if (!users) {
    throw new Error('users are required');
  }

  if (!Array.isArray(users) || users.some(user => !mongoose.Types.ObjectId.isValid(user))) {
    throw new Error('Invalid userId(s) in users array');
  }

  if (!userId) {
    throw new Error('userId is required');
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error('Invalid userId');
  }

  console.log('projectId:', projectId);
  console.log('userId:', userId);

  const project = await ProjectModel.findOne({
    _id: projectId,
    users: userId
  });

  console.log('project:', project);

  if (!project) {
    const projectOwner = await ProjectModel.findOneAndUpdate(
      { _id: projectId },
      { $addToSet: { users: userId } },
      { new: true }
    );
  
    if (!projectOwner) {
      throw new Error('Invalid project or permission denied.');
    }
  }

  return Project;
};