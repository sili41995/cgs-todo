import {
	IAddTodoProps,
	IDeleteTodoProps,
	IFetchTodosRes,
	ITodo,
	IUpdateTodoProps,
} from '~typings/todos.types';
import todosService from '~shared/services/todos.service';
import { getFilteredTodosAfterDelete, getUpdatedTodos } from '~/utils';
import operationWrapper from '~store/operationWrapper';

const fetchTodosOperation = async ({
	set,
	data,
}): Promise<IFetchTodosRes | undefined> => {
	const response = await todosService.fetchTodos(data);
	set({
		items: response.todos,
		count: response.count,
		isLoaded: true,
	});
	return response;
};

const addTodoOperation = async ({
	data,
	set,
	get,
}: IAddTodoProps): Promise<ITodo | undefined> => {
	const { items: todos } = get();

	const response = await todosService.addTodo(data);
	set({ items: [...todos, response] });
	return response;
};

const deleteTodoOperation = async ({
	set,
	get,
	data,
}: IDeleteTodoProps): Promise<ITodo | undefined> => {
	const { items: todos } = get();

	const response = await todosService.deleteTodo(data);
	const updatedTodos = getFilteredTodosAfterDelete({
		todos,
		todoId: response.id,
	});
	set({ items: updatedTodos });
	return response;
};

const updateTodoOperation = async ({
	data,
	set,
	get,
}: IUpdateTodoProps): Promise<ITodo | undefined> => {
	const { items: todos } = get();

	const response = await todosService.updateTodo(data);
	const updatedTodos = getUpdatedTodos({
		todos: todos,
		updatedTodo: response,
	});
	set({ items: updatedTodos });
	return response;
};

export const fetchTodos = operationWrapper(fetchTodosOperation);
export const addTodo = operationWrapper(addTodoOperation);
export const deleteTodo = operationWrapper(deleteTodoOperation);
export const updateTodo = operationWrapper(updateTodoOperation);
