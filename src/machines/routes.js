import express from 'express';
import { getallmachinecontroller,postmachinecontroller, putmachinecontroller, deletemachinecontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallmachinecontroller);
router.post('/', postmachinecontroller);
router.put('/', putmachinecontroller);
router.delete('/', deletemachinecontroller);

export default router;