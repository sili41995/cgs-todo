import {
	IFetchTodoByIdProps,
	IFetchTodosData,
	IFetchTodosRes,
	ITodo,
	IUpdateTodoData,
	NewTodo,
} from '~typings/todos.types';
import HttpSerivce from './http.service';

class TodosService extends HttpSerivce {
	constructor() {
		super();
	}

	async fetchTodos({
		search,
		status,
		page,
		limit,
	}: IFetchTodosData): Promise<IFetchTodosRes | undefined> {
		const response = await this.get<IFetchTodosRes>({
			url: `todos?search=${search}&status=${status}&page=${page}&limit=${limit}`,
		});

		return response.data;
	}

	async fetchTodoById({
		signal,
		id,
	}: IFetchTodoByIdProps): Promise<ITodo | undefined> {
		const response = await this.get<ITodo>({
			url: `todos/${id}`,
			signal,
		});

		return response.data;
	}

	async deleteTodo(id: number): Promise<ITodo | undefined> {
		const response = await this.delete<ITodo>({
			url: `todos/${id}`,
		});

		return response.data;
	}

	async addTodo(data: NewTodo): Promise<ITodo | undefined> {
		const response = await this.post<ITodo, NewTodo>({
			url: 'todos',
			data,
		});

		return response.data;
	}

	async updateTodo({ id, data }: IUpdateTodoData): Promise<ITodo | undefined> {
		const response = await this.put<ITodo, NewTodo>({
			url: `todos/${id}`,
			data,
		});

		return response.data;
	}
}

const todosService = new TodosService();

export default todosService;
