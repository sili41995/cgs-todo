import React, { FC } from 'react';
import { Form, Title } from './forgotPassForm.styles';
import Input from '~shared/components/input';
import { FormTypes, InputTypes } from '~/constants';
import AuthFormBtn from '~shared/components/authFormBtn';
import { useForgotPassForm } from '~/hooks';

const ForgotPassForm: FC = () => {
	const { isLoading, handleFormSubmit, handleSubmit, register } =
		useForgotPassForm();

	return (
		<>
			<Title>recover password</Title>
			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Input
					settings={{ ...register('email', { required: true }) }}
					type={InputTypes.email}
					placeholder="Email"
					formType={FormTypes.authForm}
					autoFocus
				/>
				<AuthFormBtn title="Restore" disabled={isLoading} />
			</Form>
		</>
	);
};

export default ForgotPassForm;
