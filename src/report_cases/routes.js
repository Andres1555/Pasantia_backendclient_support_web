import express from 'express';
import { getallreportcasecontroller,postreportcasecontroller, putreportcasecontroller, deletreportcasecontroller } from './controllers.js';

const router = express.Router();


router.get('/', getallreportcasecontroller);
router.post('/', postreportcasecontroller);
router.put('/:', putreportcasecontroller);
router.delete('/:', deletreportcasecontroller);

export default router;