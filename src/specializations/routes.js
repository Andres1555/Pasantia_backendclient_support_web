import express from 'express';
import { GetallSpecController,CreateSpecController,UpdateSpecController,DeleteSpecController} from './controllers.js';

const router = express.Router();


router.get('/', GetallSpecController);
router.post('/', CreateSpecController);
router.put('/', UpdateSpecController);
router.delete('/',DeleteSpecController);

export default router;