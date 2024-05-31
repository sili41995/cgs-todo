import React, { FC, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import Container from '~shared/components/container';
import DelTodoBtn from '~shared/components/delTodoBtn';
import IconButton from '~shared/components/iconButton';
import EditTodoForm from '~shared/components/editTodoForm';
import Todo from '~shared/components/todo';
import { AriaLabels, FormTypes, IconBtnTypes, IconSizes } from '~/constants';
import { BtnClickEvent } from '~typings/auth.types';
import { makeBlur } from '~/utils';
import { IProps } from './todoDetails.types';
import { ButtonsList, ListItem } from './todoDetails.styles';
import { useAuthStore } from '~store/store';
import { selectUser } from '~store/auth/selectors';

const TodoDetails: FC<IProps> = ({
	todo,
	onDelBtnClick,
	isLoading,
	setTodo,
}) => {
	const [editTodo, setEditTodo] = useState<boolean>(false);
	const user = useAuthStore(selectUser);
	const isOwner = todo.owner === user.id;

	const toggleEditTodoStatus = (e: BtnClickEvent): void => {
		setEditTodo((prevState) => !prevState);
		makeBlur(e.currentTarget);
	};

	return (
		<Container>
			{isOwner && (
				<ButtonsList>
					{!editTodo && (
						<ListItem>
							<DelTodoBtn
								onClick={onDelBtnClick}
								iconBtnType={IconBtnTypes.delete}
								disabled={isLoading}
							/>
						</ListItem>
					)}
					<ListItem>
						<IconButton
							iconBtnType={IconBtnTypes.edit}
							onClick={toggleEditTodoStatus}
							ariaLabel={AriaLabels.edit}
							icon={<AiOutlineEdit size={IconSizes.secondary} />}
						/>
					</ListItem>
				</ButtonsList>
			)}
			{editTodo ? (
				<EditTodoForm
					todo={todo}
					formType={FormTypes.editTodo}
					setTodo={setTodo}
				/>
			) : (
				<Todo todo={todo} />
			)}
		</Container>
	);
};

export default TodoDetails;
