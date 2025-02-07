import { Router } from 'express';
import * as aiController from '../Controllers/aiController.js'
const router = Router();


router.get('/get-result', aiController.getResult);

export default router;