import { Endpoints } from '@/constants';
import userController from '@/controllers/user.controller';
import { ctrlWrapper, validateBody } from '@/middlewares';
import auth from '@/middlewares/auth.middleware';
import { userSchemas } from '@/schemas';
import { Router } from 'express';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
const registerCtrl = ctrlWrapper(userController.register.bind(userController));
const loginCtrl = ctrlWrapper(userController.login.bind(userController));
const logoutCtrl = ctrlWrapper(userController.logout.bind(userController));
const currentCtrl = ctrlWrapper(userController.current.bind(userController));
const restorePasswordCtrl = ctrlWrapper(
	userController.restorePassword.bind(userController),
);
const updatePasswordCtrl = ctrlWrapper(
	userController.updatePassword.bind(userController),
);

router.post(
	Endpoints.register,
	validateBody(userSchemas.registerSchema),
	registerCtrl,
);
router.post(Endpoints.login, validateBody(userSchemas.loginSchema), loginCtrl);
router.post(Endpoints.logout, auth, logoutCtrl);
router.get(Endpoints.current, auth, currentCtrl);
router.post(
	Endpoints.restorePass,
	validateBody(userSchemas.restorePasswordSchema),
	restorePasswordCtrl,
);
router.patch(
	Endpoints.updatePass,
	validateBody(userSchemas.updatePasswordSchema),
	updatePasswordCtrl,
);

export default router;
