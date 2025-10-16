import express from 'express';
import { getallspeccontroller,postspeccontroller, putspeccontroller, deletspeccontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallspeccontroller);
router.post('/', postspeccontroller);
router.put('/', putspeccontroller);
router.delete('/', deletspeccontroller);

export default router;