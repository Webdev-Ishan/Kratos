import { io } from 'socket.io-client';

let socketInstance = null;

export const initializeSocket = (projectId) => {
    const token = localStorage.getItem('token');
    //console.log("Token Sent:", token); // Debugging: Check if token is being retrieved

    socketInstance = io(import.meta.env.VITE_API_URL, {
        transports: ["websocket"],
        auth: { token } ,// Send token in auth instead of headers
        query: { projectId }
    });

    return socketInstance;
};



export const recievemessage = (eventName, cb)=>{

    socketInstance.on(eventName, cb);
}

export const sendmessage = (eventName , data)=>{

socketInstance.emit(eventName, data)

}