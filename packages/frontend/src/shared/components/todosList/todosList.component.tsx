import React, { FC, useRef } from 'react';
import TodosListItem from '~shared/components/todosListItem';
import { IProps } from './todosList.types';
import { List, MobileIOGuard } from './todosList.styles';
import { ClassNames } from '~/constants';
import { useGetMoreTodos } from '~/hooks';

const TodosList: FC<IProps> = ({ todos }) => {
	const mobileIOGuard = useRef(null);
	useGetMoreTodos(mobileIOGuard);

	return (
		<>
			<List>
				{todos.map((todo) => (
					<TodosListItem key={todo.id} todo={todo} />
				))}
			</List>
			<MobileIOGuard className={ClassNames.mobileIOGuard} ref={mobileIOGuard} />
		</>
	);
};

export default TodosList;
