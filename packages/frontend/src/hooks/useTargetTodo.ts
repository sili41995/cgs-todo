import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchStatuses } from '~/constants';
import { toasts } from '~/utils';
import { ROUTER_KEYS } from '~shared/keys';
import todosService from '~shared/services/todos.service';
import { ITodo, IUseTargetTodo } from '~typings/todos.types';

const useTargetTodo = (): IUseTargetTodo => {
	const [todo, setTodo] = useState<ITodo | null>(null);
	const id = useParams()[ROUTER_KEYS.DYNAMIC_KEY];
	const [fetchTodoStatus, setFetchTodoStatus] = useState<FetchStatuses>(
		() => FetchStatuses.idle,
	);
	const isLoadingTodo = fetchTodoStatus === FetchStatuses.pending;
	const isLoadedTodo = fetchTodoStatus === FetchStatuses.resolved;
	const isError = fetchTodoStatus === FetchStatuses.rejected;

	useEffect(() => {
		const controller = new AbortController();

		const getTodo = async (id: number): Promise<void> => {
			setFetchTodoStatus(FetchStatuses.pending);
			try {
				const todo = await todosService.fetchTodoById({
					id,
					signal: controller.signal,
				});

				setTodo(todo);
				setFetchTodoStatus(FetchStatuses.resolved);
			} catch (error) {
				if (error instanceof AxiosError && !(error instanceof CanceledError)) {
					toasts.errorToast(error.response.data.message);
					setFetchTodoStatus(FetchStatuses.rejected);
				}
			}
		};

		id && getTodo(Number(id));

		return (): void => {
			controller.abort();
		};
	}, [id]);

	const updateTodo = (data: ITodo): void => {
		setTodo(data);
	};

	return {
		id,
		todo,
		setTodo: updateTodo,
		isLoadingTodo,
		isLoadedTodo,
		isError,
	};
};

export default useTargetTodo;
