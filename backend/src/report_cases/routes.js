import express from 'express';
import { GetallReportcaseController,CreateReportcaseController, UpdateReportcaseController, DeleteReportcaseController } from './controllers.js';

const router = express.Router();


router.get('/',  GetallReportcaseController);
router.post('/', CreateReportcaseController);
router.put('/',  UpdateReportcaseController);
router.delete('/',DeleteReportcaseController);

export default router;