import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { ROUTER_KEYS } from '~shared/keys';
import { useTodosStore } from '~store/store';
import { selectDeleteTodo, selectIsLoading } from '~store/todos/selectors';
import { IUseDeleteTodo } from '~typings/todos.types';

const useDeleteTodo = (): IUseDeleteTodo => {
	const [todoId, setTodoId] = useState<number | null>(null);
	const navigate = useNavigate();
	const deleteTodo = useTodosStore(selectDeleteTodo);
	const isLoading = useTodosStore(selectIsLoading);

	const { search, pathname } = useLocation();
	const redirectPath = `/${ROUTER_KEYS.DASHBOARD + search}`;

	useEffect(() => {
		const deleteTargetTodo = async (todoId: number): Promise<void> => {
			try {
				await deleteTodo(todoId);
				if (pathname.includes(String(todoId))) {
					navigate(redirectPath);
				}
				toasts.successToast(Messages.deleteSuccess);
			} catch (error) {
				if (error instanceof AxiosError) {
					toasts.errorToast(error.response.data.message);
				}
			}
		};

		todoId && deleteTargetTodo(todoId);
	}, [todoId, deleteTodo, navigate, pathname, redirectPath]);
	return { deleteTodo: setTodoId, isLoading };
};

export default useDeleteTodo;
