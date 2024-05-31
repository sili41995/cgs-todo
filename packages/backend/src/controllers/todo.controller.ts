import { Response } from 'express';
import TodoService from '@/services/todo.service';
import { Endpoints } from '@/constants';
import { ITodoRequest } from '@/types/todos.type';
import { getFindFilters, httpError } from '@/utils';

export class TodoController {
	constructor(private todoService: TodoService) {
		this.todoService = todoService;
	}

	async getAll(req: ITodoRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 400 });
		}

		const findFilters = getFindFilters({ user: req.user, query: req.query });

		const { count, todos } = await this.todoService.findAll(findFilters);
		res.status(200).json({ todos, count });
	}

	async getById(req: ITodoRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 400 });
		}

		const dynamicId = req.params[Endpoints.dynamicId];
		const id = Number(dynamicId);
		const result = await this.todoService.findById({ id, owner: req.user.id });
		res.status(200).json(result);
	}

	async add(req: ITodoRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 400 });
		}

		const result = await this.todoService.add({
			...req.body,
			owner: req.user.id,
		});
		res.status(201).json(result);
	}

	async updateById(req: ITodoRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 400 });
		}

		const dynamicId = req.params[Endpoints.dynamicId];
		const id = Number(dynamicId);
		const result = await this.todoService.updateById({
			id,
			data: req.body,
			owner: req.user.id,
		});
		res.status(200).json(result);
	}

	async deleteById(req: ITodoRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 400 });
		}

		const dynamicId = req.params[Endpoints.dynamicId];
		const id = Number(dynamicId);
		const result = await this.todoService.deleteById({
			id,
			owner: req.user.id,
		});
		res.status(200).json(result);
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
