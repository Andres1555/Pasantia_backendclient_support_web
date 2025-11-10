import express from 'express';
import { GetAllSpecuserController,CreateSpecuserController,DeleteSpecuserController } from './controllers.js';

const router = express.Router()


router.get('/', GetAllSpecuserController);
router.post('/', CreateSpecuserController);
router.delete('/',DeleteSpecuserController);

export default router;