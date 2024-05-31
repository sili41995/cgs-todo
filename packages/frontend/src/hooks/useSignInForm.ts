import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Messages } from '~/constants';
import { handleFormSubmitWrap, toasts } from '~/utils';
import { validateSignInForm } from '~/validator';
import { ROUTER_KEYS } from '~shared/keys';
import { selectIsLoading, selectSignIn } from '~store/auth/selectors';
import { useAuthStore } from '~store/store';
import { Credentials, IUseSignInForm } from '~typings/auth.types';

const useSignInForm = (): IUseSignInForm => {
	const isLoading = useAuthStore(selectIsLoading);
	const signIn = useAuthStore(selectSignIn);
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<Credentials>();
	const signUpPath = `/${ROUTER_KEYS.SIGN_UP}`;
	const forgotPasswordPath = `/${ROUTER_KEYS.FORGOT_PASS}`;

	useEffect(() => {
		const invalidFields = Object.keys(errors);
		if (invalidFields.length) {
			validateSignInForm(errors);
		}
	}, [isSubmitting, errors]);

	const handleFormSubmit: SubmitHandler<Credentials> = async (data) => {
		await signIn(data);
		toasts.successToast(Messages.signInSuccess);
	};

	return {
		handleFormSubmit: handleFormSubmitWrap(handleFormSubmit),
		handleSubmit,
		register,
		signUpPath,
		isLoading,
		forgotPasswordPath,
	};
};

export default useSignInForm;
