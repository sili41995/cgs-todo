import React, { FC } from 'react';
import LinkWithQuery from '~shared/components/linkWithQuery';
import DelTodoBtn from '~shared/components/delTodoBtn';
import { IconBtnTypes } from '~/constants';
import { useDeleteTodo } from '~/hooks';
import { IProps } from './todosListItem.types';
import { ListItem, Task } from './todosListItem.styles';
import { useAuthStore } from '~store/store';
import { selectUser } from '~store/auth/selectors';

const TodosListItem: FC<IProps> = ({ todo }) => {
	const { complete, title, id, owner } = todo;
	const user = useAuthStore(selectUser);
	const { deleteTodo, isLoading } = useDeleteTodo();
	const isOwner = owner === user.id;

	const onDelTodoBtnClick = (): void => {
		deleteTodo(id);
	};

	return (
		<ListItem>
			{isOwner && (
				<DelTodoBtn
					iconBtnType={IconBtnTypes.deleteTransparent}
					onClick={onDelTodoBtnClick}
					disabled={isLoading}
				/>
			)}
			<LinkWithQuery to={`${id}`}>
				<Task completed={complete}>{title}</Task>
			</LinkWithQuery>
		</ListItem>
	);
};

export default TodosListItem;
