import { IGetUpdatedTodosProps, ITodo } from '~typings/todos.types';

const getUpdatedTodos = ({
	todos,
	updatedTodo,
}: IGetUpdatedTodosProps): ITodo[] =>
	todos.map((todo) =>
		todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo,
	);

export default getUpdatedTodos;
