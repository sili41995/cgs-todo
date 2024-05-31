import { ITodosInitialState } from '~typings/todos.types';

const initialState: ITodosInitialState = {
	items: [],
	count: null,
	isLoading: false,
	isLoaded: false,
	error: null,
};

export default initialState;
