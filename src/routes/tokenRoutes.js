import { Router } from 'express';
import 'express-async-errors';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.create);

export default router;
