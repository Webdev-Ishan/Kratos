import ProjectModel from "../Models/Projectmodel.js";


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