import React, { FC } from 'react';
import { useTodosPage } from '~/hooks';
import { GeneralParams, Messages } from '~/constants';
import TodosList from '~shared/components/todosList';
import Loader from '~shared/components/loader';
import DefaultMessage from '~shared/components/defaultMessage';
import Slider from '~shared/components/slider';
import PaginationBar from '~shared/components/paginationBar/paginationBar.component';
import { useTodosStore } from '~store/store';
import { selectCount } from '~store/todos/selectors';

const TodosPage: FC = () => {
	const { isLoading, showTodosList, todos } = useTodosPage();
	const count = useTodosStore(selectCount);
	const limit = Number(GeneralParams.todosLimit);
	const showPaginationBar = count > limit;

	return (
		<>
			{isLoading && <Loader />}
			{showTodosList ? (
				<>
					<TodosList todos={todos} />
					<Slider todos={todos} />
				</>
			) : (
				<DefaultMessage message={Messages.emptyTodosList} />
			)}
			{showPaginationBar && <PaginationBar quantity={limit} total={count} />}
		</>
	);
};

export default TodosPage;
