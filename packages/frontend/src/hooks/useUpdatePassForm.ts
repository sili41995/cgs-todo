import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FetchStatuses, Messages } from '~/constants';
import { toasts } from '~/utils';
import { validateUpdatePassForm } from '~/validator';
import { ROUTER_KEYS } from '~shared/keys';
import authService from '~shared/services/auth.service';
import { INewPassword, IUseUpdatePassForm } from '~typings/auth.types';

const useUpdatePassForm = (): IUseUpdatePassForm => {
	const token = useParams()[ROUTER_KEYS.DYNAMIC_TOKEN];
	const [fetchStatus, setFetchStatus] = useState<FetchStatuses>(
		() => FetchStatuses.idle,
	);
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
		watch,
	} = useForm<INewPassword>();
	const isLoading = fetchStatus === FetchStatuses.pending;
	const password = watch('password');

	const validatePassRepeatField = (value: string): boolean =>
		value === password;

	useEffect(() => {
		const invalidFields = Object.keys(errors);
		if (invalidFields.length) {
			validateUpdatePassForm(errors);
		}
	}, [isSubmitting, errors]);

	const handleFormSubmit: SubmitHandler<INewPassword> = async (data) => {
		try {
			setFetchStatus(FetchStatuses.pending);
			await authService.updatePassword({ password: data.password, token });
			toasts.successToast(Messages.updPassSuccess);
			setFetchStatus(FetchStatuses.resolved);
		} catch (error) {
			if (error instanceof AxiosError) {
				toasts.errorToast(error.response.data.message);
				setFetchStatus(FetchStatuses.rejected);
			}
		}
	};

	return {
		isLoading,
		handleFormSubmit,
		handleSubmit,
		register,
		validatePassRepeatField,
	};
};

export default useUpdatePassForm;
