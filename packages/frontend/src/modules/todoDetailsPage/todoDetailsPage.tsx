import React, { FC } from 'react';
import { Messages } from '~/constants';
import { useDeleteTodo, useTargetTodo } from '~/hooks';
import { makeBlur } from '~/utils';
import Container from '~shared/components/container';
import DefaultMessage from '~shared/components/defaultMessage';
import Loader from '~shared/components/loader';
import TodoDetails from '~shared/components/todoDetails';
import { BtnClickEvent } from '~typings/auth.types';

const TodoDetailsPage: FC = () => {
	const { id, todo, setTodo, isLoadingTodo, isLoadedTodo, isError } =
		useTargetTodo();
	const { deleteTodo, isLoading } = useDeleteTodo();

	const onDelBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);

		if (id) {
			deleteTodo(Number(id));
		}
	};

	return (
		<Container>
			{isLoadingTodo && <Loader />}
			{isLoadedTodo && (
				<TodoDetails
					todo={todo}
					setTodo={setTodo}
					onDelBtnClick={onDelBtnClick}
					isLoading={isLoading}
				/>
			)}
			{isError && <DefaultMessage message={Messages.todoAbsent} />}
		</Container>
	);
};

export default TodoDetailsPage;
