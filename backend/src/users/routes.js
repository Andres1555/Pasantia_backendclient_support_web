import express from 'express';
import { GetallUserController, GetUserbyidController, CreateUserController, UpdateUserController, DeletUserController } from './controllers.js';

const router = express.Router();


router.get('/', GetallUserController);
router.get('/:id', GetUserbyidController)
router.post('/', CreateUserController);
router.put('/:ci', UpdateUserController);
router.delete('/:id', DeletUserController);

export default router;