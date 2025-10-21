import express from 'express';
import { CreateMachineController, DeleteMachineController, GetallMachineController, UpdateMachineController } from './controllers.js';

const router = express.Router();


router.get('/', GetallMachineController);
router.post('/', CreateMachineController);
router.put('/', UpdateMachineController);
router.delete('/', DeleteMachineController);

export default router;