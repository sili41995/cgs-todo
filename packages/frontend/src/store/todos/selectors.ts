import {
	IFetchTodosData,
	IFetchTodosRes,
	ITodo,
	ITodosState,
	IUpdateTodoData,
	NewTodo,
	Todos,
} from '~typings/todos.types';

export const selectTodos = (state: ITodosState): Todos => state.items;

export const selectCount = (state: ITodosState): number => state.count;

export const selectIsLoaded = (state: ITodosState): boolean => state.isLoaded;

export const selectIsLoading = (state: ITodosState): boolean => state.isLoading;

export const selectError = (state: ITodosState): string => state.error;

export const selectFetchTodos = (
	state: ITodosState,
): ((data: IFetchTodosData) => Promise<IFetchTodosRes>) => state.fetchTodos;

export const selectAddTodo = (
	state: ITodosState,
): ((data: NewTodo) => Promise<ITodo>) => state.addTodo;

export const selectDeleteTodo = (
	state: ITodosState,
): ((id: number) => Promise<ITodo>) => state.deleteTodo;

export const selectUpdateTodo = (
	state: ITodosState,
): ((data: IUpdateTodoData) => Promise<ITodo>) => state.updateTodo;
