import { Router } from 'express';
import cepController from '../controllers/CepController';
import tokenCheck from '../middleware/tokenCheck';

const router = new Router();

router.post('/', tokenCheck, cepController.getData);

export default router;
