import { Router } from 'express';
import todoController from '@/controllers/todo.controller';
import { Endpoints, ModelNames } from '@/constants';
import { ctrlWrapper, isExist, isValidId, validateBody } from '@/middlewares';
import { todosSchemas } from '@/schemas';
import auth from '@/middlewares/auth.middleware';

const router: Router = Router();

router.use(auth);

const getAllCtrl = ctrlWrapper(todoController.getAll.bind(todoController));
const addCtrl = ctrlWrapper(todoController.add.bind(todoController));
const getByIdCtrl = ctrlWrapper(todoController.getById.bind(todoController));
const updateByIdCtrl = ctrlWrapper(
	todoController.updateById.bind(todoController),
);
const deleteByIdCtrl = ctrlWrapper(
	todoController.deleteById.bind(todoController),
);

router.get(Endpoints.root, getAllCtrl);
router.post(Endpoints.root, validateBody(todosSchemas.addSchema), addCtrl);
router.get(
	`/:${Endpoints.dynamicId}`,
	isValidId,
	isExist(ModelNames.todo),
	getByIdCtrl,
);
router.put(
	`/:${Endpoints.dynamicId}`,
	isValidId,
	isExist(ModelNames.todo),
	validateBody(todosSchemas.updateSchema),
	updateByIdCtrl,
);
router.delete(
	`/:${Endpoints.dynamicId}`,
	isValidId,
	isExist(ModelNames.todo),
	deleteByIdCtrl,
);

export default router;
