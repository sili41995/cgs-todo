import React, { FC } from 'react';
import { Form, Message, Title } from './signInForm.styles';
import Input from '~shared/components/input';
import { FormTypes, InputTypes, Messages } from '~/constants';
import AuthFormMessage from '~shared/components/authFormMessage';
import AuthFormBtn from '~shared/components/authFormBtn';
import { useSignInForm } from '~/hooks';

const SignInForm: FC = () => {
	const {
		handleFormSubmit,
		handleSubmit,
		register,
		signUpPath,
		isLoading,
		forgotPasswordPath,
	} = useSignInForm();

	return (
		<>
			<Title>sign in</Title>
			<Message>{Messages.greetings}!</Message>
			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Input
					settings={{ ...register('email', { required: true }) }}
					type={InputTypes.email}
					placeholder="Email"
					formType={FormTypes.authForm}
					autoFocus
				/>
				<Input
					settings={{
						...register('password', { required: true, minLength: 6 }),
					}}
					type={InputTypes.password}
					placeholder="Password"
					formType={FormTypes.authForm}
				/>
				<AuthFormMessage
					action="Sign up"
					pageLink={signUpPath}
					message="if you don't have an account yet"
				/>
				<AuthFormMessage
					action="Forgot password?"
					pageLink={forgotPasswordPath}
				/>
				<AuthFormBtn title="Sign in" disabled={isLoading} />
			</Form>
		</>
	);
};

export default SignInForm;
