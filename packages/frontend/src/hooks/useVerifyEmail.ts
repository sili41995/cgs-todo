import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchStatuses } from '~/constants';
import { toasts } from '~/utils';
import { ROUTER_KEYS } from '~shared/keys';
import authService from '~shared/services/auth.service';
import { IUseVerifyEmail } from '~typings/auth.types';

const useVerifyEmail = (): IUseVerifyEmail => {
	const token = useParams()[ROUTER_KEYS.DYNAMIC_TOKEN];
	const [fetchStatus, setFetchStatus] = useState<FetchStatuses>(
		() => FetchStatuses.idle,
	);
	const isLoading = fetchStatus === FetchStatuses.pending;
	const isSuccess = fetchStatus === FetchStatuses.resolved;
	const isError = fetchStatus === FetchStatuses.rejected;

	useEffect(() => {
		const verifyEmail = async (token: string): Promise<void> => {
			setFetchStatus(FetchStatuses.pending);
			try {
				await authService.verifyEmail(token);
				setFetchStatus(FetchStatuses.resolved);
			} catch (error) {
				if (error instanceof AxiosError) {
					toasts.errorToast(error.response.data.message);
					setFetchStatus(FetchStatuses.rejected);
				}
			}
		};

		token && verifyEmail(token);
	}, [token]);

	return { isLoading, isSuccess, isError };
};

export default useVerifyEmail;
