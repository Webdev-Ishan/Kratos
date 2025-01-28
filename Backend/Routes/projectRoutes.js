import { Router } from 'express';
import * as projectController from '../Controllers/projectController.js';
import { body } from 'express-validator';
import * as auth from '../Middleware/authmiddleware.js';

const router = Router();

router.post('/createproject',
  auth.authuser,
  body('name').isString().withMessage('Name should be a string'),
  projectController.createProjectController
);

router.get('/getprojects', auth.authuser, projectController.getProjectsController);

router.put('/add-user',
  auth.authuser,
  body('projectId').isString().withMessage('Project ID is required'),
  body('users').isArray({ min: 1 }).withMessage('Users must be an array of strings').bail()
      .custom((users) => users.every(user => typeof user === 'string')).withMessage('Each user must be a string'),
  projectController.addUserToProject
)


router.get('/getproject/:projectId', auth.authuser, projectController.getAllprojects);

export default router;