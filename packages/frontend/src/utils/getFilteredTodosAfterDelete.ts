import { IGetFilteredTodosAfterDeleteProps, Todos } from '~typings/todos.types';

const getFilteredTodosAfterDelete = ({
	todos,
	todoId,
}: IGetFilteredTodosAfterDeleteProps): Todos =>
	todos.filter(({ id }) => id !== todoId);

export default getFilteredTodosAfterDelete;
