import 'dotenv/config';
import app from './app.js';
import http from 'http';
import {Server} from 'socket.io'
import jwt from 'jsonwebtoken';

const server= http.createServer(app);
const io = new Server(server);



io.use((socket,next)=>{

try {

    const authHeader = socket.handshake.headers.authorization;
    const token = authHeader?.split(" ")[1];
    
    //console.log("Extracted Token:", token);
    
    if (!token) {
        return next(new Error("Authentication error: No token provided"));
    }
    


const decoded = jwt.verify(token, process.env.JWT_SECRET);

if(!decoded){
    return next(new Error('Authentication error'))
}


socket.user = decoded

next()
    
} catch (error) {
    next(error)
}


})










io.on('connection', client => {

console.log('a user connected');

  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});









const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});