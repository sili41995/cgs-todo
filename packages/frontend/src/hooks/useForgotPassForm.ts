import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FetchStatuses, Messages } from '~/constants';
import { toasts } from '~/utils';
import { validateForgotPassForm } from '~/validator';
import authService from '~shared/services/auth.service';
import { Email, IUseForgotPassForm } from '~typings/auth.types';

const useForgotPassForm = (): IUseForgotPassForm => {
	const [fetchStatus, setFetchStatus] = useState<FetchStatuses>(
		() => FetchStatuses.idle,
	);
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<Email>();
	const isLoading = fetchStatus === FetchStatuses.pending;

	useEffect(() => {
		const invalidFields = Object.keys(errors);
		if (invalidFields.length) {
			validateForgotPassForm(errors);
		}
	}, [isSubmitting, errors]);

	const handleFormSubmit: SubmitHandler<Email> = async (data) => {
		try {
			setFetchStatus(FetchStatuses.pending);
			await authService.restorePassword(data);
			toasts.successToast(Messages.recoverEmailSuccess);
			setFetchStatus(FetchStatuses.resolved);
		} catch (error) {
			if (error instanceof AxiosError) {
				toasts.errorToast(error.response.data.message);
				setFetchStatus(FetchStatuses.rejected);
			}
		}
	};

	return { isLoading, handleFormSubmit, handleSubmit, register };
};

export default useForgotPassForm;
