import express from 'express';
import { getallspecuserontroller,postspecuserontroller, putspecuserontroller, deletespecuserontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallspecuserontroller);
router.post('/', postspecuserontroller);
router.put('/', putspecuserontroller);
router.delete('/',deletespecuserontroller);

export default router;