import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Messages } from '~/constants';
import { makeBlur, toasts } from '~/utils';
import { ROUTER_KEYS } from '~shared/keys';
import { selectIsLoading, selectSignOut } from '~store/auth/selectors';
import { useAuthStore } from '~store/store';
import { IUseSignOut } from '~typings/auth.types';
import { BtnClickEvent } from '~typings/auth.types';

const useSignOut = (): IUseSignOut => {
	const signOut = useAuthStore(selectSignOut);
	const isLoading = useAuthStore(selectIsLoading);
	const navigate = useNavigate();

	const signOutUser = async (): Promise<void> => {
		try {
			await signOut();
			toasts.successToast(Messages.goodbye);
			navigate(ROUTER_KEYS.ROOT);
		} catch (error) {
			if (error instanceof AxiosError) {
				toasts.errorToast(error.response.data.message);
			}
		}
	};

	const onSignOutBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);
		signOutUser();
	};

	return { onSignOutBtnClick, isLoading };
};

export default useSignOut;
