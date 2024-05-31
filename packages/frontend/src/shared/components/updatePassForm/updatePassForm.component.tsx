import React, { FC } from 'react';
import { AuthParams, FormTypes, InputTypes } from '~/constants';
import AuthFormBtn from '~shared/components/authFormBtn';
import { Form, Title } from './updatePassForm.styles';
import Input from '~shared/components/input';
import { useUpdatePassForm } from '~/hooks';

const UpdatePassForm: FC = () => {
	const {
		isLoading,
		handleFormSubmit,
		handleSubmit,
		register,
		validatePassRepeatField,
	} = useUpdatePassForm();

	return (
		<>
			<Title>Update Password</Title>
			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Input
					settings={{
						...register('password', {
							required: true,
							minLength: AuthParams.passMinLength,
							maxLength: AuthParams.passMaxLength,
						}),
					}}
					type={InputTypes.text}
					placeholder="Password"
					formType={FormTypes.authForm}
					autoFocus
				/>
				<Input
					settings={{
						...register('passwordRepeat', {
							required: true,
							validate: validatePassRepeatField,
						}),
					}}
					type={InputTypes.text}
					placeholder="Repeat password"
					formType={FormTypes.authForm}
					autoFocus
				/>
				<AuthFormBtn title="Update" disabled={isLoading} />
			</Form>
		</>
	);
};

export default UpdatePassForm;
