import express from 'express';
import { getallreportcontroller,postreportcontroller, putreportcontroller, deletreportcontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallreportcontroller);
router.post('/', postreportcontroller);
router.put('/', putreportcontroller);
router.delete('/', deletreportcontroller);

export default router;