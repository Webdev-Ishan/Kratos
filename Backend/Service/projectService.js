import ProjectModel from "../Models/Projectmodel.js";


export const CreateProject = async (name, userId) => {

if(!name || !userId){
    throw new Error('Name of project and UserId are required');

}

const project = await ProjectModel.create({
    name,
    user:[userId]
});

return project;

};