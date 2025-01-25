import mongoose from "mongoose";




const projectSchema = new mongoose.Schema({


name:{

type:String,
required:true,
unique:true,
trim : true,
lowercase : true,

},
user:[

{
type:mongoose.Schema.Types.ObjectId,
ref:'user'
}

]


});


const Project = mongoose.model('Project', projectSchema);

export default Project;