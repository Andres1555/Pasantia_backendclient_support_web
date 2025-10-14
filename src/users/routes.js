import express from 'express';
import { getallusercontroller, getuserbyidcontroller, postusercontroller, putusercontroller, deletusercontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallusercontroller);
router.get('/:', getuserbyidcontroller)
router.post('/', postusercontroller);
router.put('/:', putusercontroller);
router.delete('/:', deletusercontroller);

export default router;