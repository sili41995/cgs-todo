import {
	GetTotosStateFunc,
	IFetchTodosData,
	IFetchTodosRes,
	ITodo,
	ITodosState,
	IUpdateTodoData,
	NewTodo,
	SetTodosStateFunc,
} from '~typings/todos.types';
import setState from '~store/setState';
import { addTodo, fetchTodos, deleteTodo, updateTodo } from './operations';
import initialState from './initialState';

const todosSlice = (
	set: SetTodosStateFunc,
	get: GetTotosStateFunc,
): ITodosState => ({
	...initialState,
	fetchTodos: async (
		data: IFetchTodosData,
	): Promise<IFetchTodosRes | undefined> =>
		await fetchTodos({
			set: setState({ set, name: 'fetchTodos' }),
			get: undefined,
			data,
		}),
	addTodo: async (data: NewTodo): Promise<ITodo | undefined> =>
		await addTodo({ data, set: setState({ set, name: 'addTodo' }), get }),
	deleteTodo: async (id: number): Promise<ITodo | undefined> =>
		await deleteTodo({
			set: setState({ set, name: 'deleteTodo' }),
			get,
			data: id,
		}),
	updateTodo: async (data: IUpdateTodoData): Promise<ITodo | undefined> =>
		await updateTodo({ set: setState({ set, name: 'updateTodo' }), get, data }),
});

const params = {
	name: 'todosStore',
};

const todosStore = {
	store: todosSlice,
	params,
};

export default todosStore;
