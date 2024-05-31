import { useEffect } from 'react';
import { GeneralParams, SearchParamsKeys } from '~/constants';
import { useTodosStore } from '~store/store';
import {
	selectFetchTodos,
	selectIsLoading,
	selectTodos,
} from '~store/todos/selectors';
import useSetSearchParams from './useSetSearchParams';
import { IUseTodosPage } from '~typings/todos.types';

const useTodosPage = (): IUseTodosPage => {
	const { searchParams } = useSetSearchParams();
	const todos = useTodosStore(selectTodos);
	const fetchTodos = useTodosStore(selectFetchTodos);
	const isLoading = useTodosStore(selectIsLoading);
	const status = searchParams.get(SearchParamsKeys.status) ?? '';
	const search = searchParams.get(SearchParamsKeys.search) ?? '';
	const page = Number(searchParams.get(SearchParamsKeys.page) ?? '1');
	const showTodosList = Boolean(todos.length);
	const limit = Number(GeneralParams.todosLimit);

	useEffect(() => {
		fetchTodos({
			search,
			status,
			limit,
			page,
		});
	}, [search, status, page]);

	return { isLoading, showTodosList, todos };
};

export default useTodosPage;
