import express from 'express';
import { getallreportuserontroller,postreportuserontroller, putreportuserontroller, deletereportuserontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallreportuserontroller);
router.post('/', postreportuserontroller);
router.put('/:', putreportuserontroller);
router.delete('/:',deletereportuserontroller);

export default router;