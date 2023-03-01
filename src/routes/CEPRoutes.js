import { Router } from 'express';
import cepController from '../controllers/CepController';

const router = new Router();

router.post('/', cepController.getData);

export default router;
