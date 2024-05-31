import { prisma } from '@/app';
import {
	DeleteTodoByIdProps,
	FindAllTodosRes,
	IFindAllTodosProps,
	ITodo,
	IUpdateTodoByIdProps,
	NewTodo,
} from '@/types/todos.type';
import { httpError } from '@/utils';
import { Prisma } from '@prisma/client';

class TodoService {
	async findAll({
		owner,
		title,
		complete,
		skip,
		take,
	}: IFindAllTodosProps): FindAllTodosRes {
		const where: Prisma.TodoWhereInput = {
			OR: [
				{
					title: { contains: title, mode: 'insensitive' },
					private: false,
					complete,
				},
				{ title: { contains: title, mode: 'insensitive' }, owner, complete },
			],
		};
		const result = await prisma.todo.findMany({
			where,
			skip,
			take,
		});
		const count = await prisma.todo.count({
			where,
		});
		return { todos: result, count };
	}

	async findById({ id, owner }: { id: number; owner: number }): Promise<ITodo> {
		const result = await prisma.todo.findFirst({
			where: {
				OR: [
					{
						id,
						private: false,
					},
					{ id, owner },
				],
			},
		});

		if (!result) {
			throw httpError({ status: 404 });
		}

		return result;
	}

	async add(data: NewTodo): Promise<ITodo> {
		const result = await prisma.todo.create({ data });
		return result;
	}

	async updateById({ id, data, owner }: IUpdateTodoByIdProps): Promise<ITodo> {
		const result = await prisma.todo.update({ where: { id, owner }, data });
		return result;
	}

	async deleteById({ id, owner }: DeleteTodoByIdProps): Promise<ITodo> {
		const result = await prisma.todo.delete({ where: { id, owner } });
		return result;
	}
}

export default TodoService;
