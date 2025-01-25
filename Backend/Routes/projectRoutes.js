import {Router} from 'express';
import * as projectController from '../Controllers/projectController.js';
import { body } from 'express-validator';
import * as auth from '../Middleware/authmiddleware.js';


const router = Router();

router.post('/createproject',
auth.authuser,
body('name').isString().withMessage('Name should be a string'),

projectController.createProjectController
);
   



export default router;