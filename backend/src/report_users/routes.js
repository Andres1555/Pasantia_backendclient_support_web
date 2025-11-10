import express from 'express';
import { GetAllReportuserController,CreateReportuserController,DeleteReportuserController } from './controllers.js';

const router = express.Router();


router.get('/',GetAllReportuserController );
router.post('/',CreateReportuserController );
router.delete('/',DeleteReportuserController);

export default router;