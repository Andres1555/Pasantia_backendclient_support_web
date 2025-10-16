import express from 'express';
import { GetallReportController,CreateReportController,UpdateReportController,DeleteReportController } from './controllers.js';

const router = express.Router();


router.get('/', GetallReportController);
router.post('/', CreateReportController);
router.put('/', UpdateReportController);
router.delete('/', DeleteReportController);

export default router;