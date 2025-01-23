import jwt from "jsonwebtoken";
import redisClient from "../Service/redis.service.js";

export const authuser = async (req, res, next) => {


    try {
        
const token = req.cookies.token || req.headers.authorization.split(' ')[1];

if(!token){
    return res.status(401).json({error:'Unauthorized, pleaase authenticate'});
}

const isblacklisted = await redisClient.get(token);


if(isblacklisted){

    res.cookie({token:''});
    
    return res.status(401).json({error:'Unauthorized, pleaase authenticate'});
}



const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = decoded;
next();


    } catch (error) {
        
        res.status(401).json({error:'Unauthorized, pleaase authenticate'});
    }
}