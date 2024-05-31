import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import FormControls from '~shared/components/formControls';
import Input from '~shared/components/input';
import { IconSizes, InputTypes } from '~/constants';
import { Form, Title } from './editTodoForm.styles';

import { useEditTodoForm } from '~/hooks';
import { IProps } from './editTodoForm.types';
import Checkbox from '~shared/components/checkbox';

const EditTodoForm: FC<IProps> = ({ todo, formType, setTodo }) => {
	const {
		register,
		handleSubmit,
		onCheckboxChange,
		onAcceptBtnClick,
		onResetBtnClick,
		taskDeadline,
		handleFormSubmit,
		isLoading,
		checked,
	} = useEditTodoForm({ todo, setTodo });
	const { title } = todo;

	return (
		<>
			<Title>Edit Todo</Title>
			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Input
					settings={{ ...register('title', { required: true }) }}
					type={InputTypes.text}
					placeholder="Title"
					label="Title"
					formType={formType}
					defaultValue={title}
				/>
				<Input
					settings={{ ...register('date', { required: true }) }}
					type={InputTypes.dateTimeLocal}
					label="Date"
					formType={formType}
					defaultValue={taskDeadline}
				/>
				<Checkbox
					settings={{ ...register('complete') }}
					type={InputTypes.checkbox}
					altElem={<FaCheck size={IconSizes.secondary} />}
					label="Complete"
					checked={checked}
					onChange={onCheckboxChange}
				/>
				<FormControls
					onAcceptBtnClick={onAcceptBtnClick}
					onResetBtnClick={onResetBtnClick}
					disabled={isLoading}
				/>
			</Form>
		</>
	);
};

export default EditTodoForm;
