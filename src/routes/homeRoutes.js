import { Router } from 'express';
import 'express-async-errors';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
