import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
