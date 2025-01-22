import mongoose from "mongoose";


function connect(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DB connected");
    })
    .catch((err)=>{
        console.log("DB connection error");
    })
}

export default connect;