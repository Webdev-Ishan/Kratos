import 'dotenv/config';
import app from './app.js';
import http from 'http';
import {Server} from 'socket.io'
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Projectmodel from './Models/Projectmodel.js';


const server= http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});
;

io.use( async (socket, next) => {
   // console.log("Received Auth:", socket.handshake.auth); // Debugging

    const token = socket.handshake.auth?.token;
   // console.log("Extracted Token:", token); // Debugging

   const projectId = socket.handshake.query.projectId;

   if(!mongoose.Types.ObjectId.isValid(projectId)){
    return next(new Error('Invalid ProjectId'))
   }


   socket.project = await Projectmodel.findById(projectId);

    if (!token) {
        return next(new Error("Authentication error: No token provided"));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.user = decoded;
        next();
    } catch (error) {
        next(new Error("Authentication error: " + error.message));
    }
});






io.on('connection', socket => {

console.log('a user connected');
socket.join(socket.project._id);

socket.on('project-message' , data=>{
    console.log(data);
socket.broadcast.to(socket.project_id).emit('project-message');

})


  socket.on('event', data => { /* … */ });
  socket.on('disconnect', () => { /* … */ });
});









const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});