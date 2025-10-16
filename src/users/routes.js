import express from 'express';
import { GetallUserController, GetUserbyidController, CreateUserController, UpdateUserController, DeletUserController } from './controllers.js';

const router = express.Router();


router.get('/', GetallUserController);
router.get('/', GetUserbyidController)
router.post('/', CreateUserController);
router.put('/', UpdateUserController);
router.delete('/', DeletUserController);

export default router;