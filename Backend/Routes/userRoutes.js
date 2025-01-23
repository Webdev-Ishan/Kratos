import {Router} from 'express';
import * as userController from '../Controllers/userController.js';
import { body } from 'express-validator';
import * as auth from '../Middleware/authmiddleware.js';


const router = Router();


router.post('/register',
    body('email').isEmail().withMessage('Email should be Valid'),
    body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long'),
    
    userController.createUserController);


    router.post('/loginuser',
        body('email').isEmail().withMessage('Email should be Valid'),
        body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long'),
        
        userController.loginUserController);


    router.get('/getuserprofile',auth.authuser, userController.userprofileController);

    router.post('/logout',auth.authuser, userController.userlogoutController);

export default router;