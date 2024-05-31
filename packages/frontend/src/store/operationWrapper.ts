import { GetTotosStateFunc, SetTodosStateFunc } from '~typings/todos.types';
import initialState from './todos/initialState';
import { AxiosError } from 'axios';

const operationWrapper = <T, K>(
	operation: (data: {
		set: SetTodosStateFunc;
		get: GetTotosStateFunc;
		data: K;
	}) => Promise<T | undefined>,
) => {
	return async (data: {
		set: SetTodosStateFunc;
		get: GetTotosStateFunc | undefined;
		data: K | undefined;
	}): Promise<T | undefined> => {
		try {
			data.set({ isLoading: true, error: initialState.error });
			const response = await operation(data);
			return response;
		} catch (error) {
			if (error instanceof AxiosError) {
				data.set({ error: error.message });
				throw new Error(error.response.data.message);
			}
		} finally {
			data.set({ isLoading: initialState.isLoading });
		}
	};
};

export default operationWrapper;
