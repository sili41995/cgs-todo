import { Endpoints } from '@/constants';
import authController from '@/controllers/auth.controller';
import { ctrlWrapper } from '@/middlewares';
import { Router } from 'express';

const router: Router = Router();

const verifyEmailCtrl = ctrlWrapper(
	authController.verifyEmail.bind(authController),
);

router.get(`/:${Endpoints.dynamicToken}`, verifyEmailCtrl);

export default router;
