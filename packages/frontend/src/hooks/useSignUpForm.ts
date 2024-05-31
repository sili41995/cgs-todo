import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Messages } from '~/constants';
import { handleFormSubmitWrap, toasts } from '~/utils';
import { validateSignUpForm } from '~/validator';
import { ROUTER_KEYS } from '~shared/keys';
import { selectIsLoading, selectSignUp } from '~store/auth/selectors';
import { useAuthStore } from '~store/store';
import { IUseSignUpForm, NewUser } from '~typings/auth.types';

const useSignUpForm = (): IUseSignUpForm => {
	const signUp = useAuthStore(selectSignUp);
	const isLoading = useAuthStore(selectIsLoading);
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<NewUser>();
	const navigate = useNavigate();
	const signInPath = `/${ROUTER_KEYS.SIGN_IN}`;

	const handleFormSubmit: SubmitHandler<NewUser> = async (data) => {
		await signUp(data);
		toasts.successToast(Messages.signUpSuccess);
		navigate(signInPath);
	};

	useEffect(() => {
		const invalidFields = Object.keys(errors);
		if (invalidFields.length) {
			validateSignUpForm(errors);
		}
	}, [errors, isSubmitting]);

	return {
		register,
		isLoading,
		handleSubmit,
		handleFormSubmit: handleFormSubmitWrap(handleFormSubmit),
		signInPath,
	};
};

export default useSignUpForm;
