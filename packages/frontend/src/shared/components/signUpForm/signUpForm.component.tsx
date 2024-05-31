import React, { FC } from 'react';
import { AuthParams, FormTypes, InputTypes, Messages } from '~/constants';
import { useSignUpForm } from '~/hooks';
import { Form, Message, Title } from './signUpForm.styles';
import Input from '~shared/components/input';
import regExp from '~/constants/regExp';
import AuthFormMessage from '~shared/components/authFormMessage';
import AuthFormBtn from '~shared/components/authFormBtn';

const SignUpForm: FC = () => {
	const { handleFormSubmit, handleSubmit, isLoading, register, signInPath } =
		useSignUpForm();
	return (
		<>
			<Title>sign up</Title>
			<Message>{Messages.greetings}!</Message>
			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Input
					settings={{ ...register('name', { required: true }) }}
					type={InputTypes.text}
					placeholder="Name"
					formType={FormTypes.authForm}
					autoFocus
				/>
				<Input
					settings={{
						...register('email', {
							required: true,
							pattern: regExp.email,
						}),
					}}
					type={InputTypes.email}
					placeholder="Email"
					formType={FormTypes.authForm}
				/>
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
				/>
				<AuthFormMessage
					action="Sign in"
					pageLink={signInPath}
					message="if you have an account"
				/>
				<AuthFormBtn title="Enlist" disabled={isLoading} />
			</Form>
		</>
	);
};

export default SignUpForm;
