import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import FormControls from '~shared/components/formControls';
import Input from '~shared/components/input';
import { IconSizes, InputTypes } from '~/constants';
import { useAddTodoForm } from '~/hooks';
import { IProps } from './addTodoForm.types';
import { Container, Form, Title } from './addTodoForm.styles';
import Checkbox from '~shared/components/checkbox';

const AddTodoForm: FC<IProps> = ({ formType }) => {
	const {
		checked,
		handleFormSubmit,
		handleSubmit,
		register,
		onCheckboxChange,
		onAcceptBtnClick,
		onResetBtnClick,
		isLoading,
	} = useAddTodoForm();

	return (
		<Container>
			<Title>Add Todo</Title>
			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Input
					settings={{ ...register('title', { required: true }) }}
					type={InputTypes.text}
					placeholder="Title"
					label="Title"
					formType={formType}
				/>
				<Input
					settings={{ ...register('description', { required: true }) }}
					type={InputTypes.text}
					placeholder="Description"
					label="Description"
					formType={formType}
				/>
				<Input
					settings={{ ...register('date', { required: true }) }}
					type={InputTypes.dateTimeLocal}
					label="Date"
					formType={formType}
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
		</Container>
	);
};

export default AddTodoForm;
