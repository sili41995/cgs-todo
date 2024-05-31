import { useEffect } from 'react';
import {
	selectIsRefreshing,
	selectRefreshUser,
	selectToken,
} from '~store/auth/selectors';
import { useAuthStore } from '~store/store';

const useRefreshUser = (): boolean => {
	const refreshUser = useAuthStore(selectRefreshUser);
	const isRefreshing = useAuthStore(selectIsRefreshing);
	const token = useAuthStore(selectToken);

	useEffect(() => {
		if (!token) {
			return;
		}

		refreshUser();
	}, [refreshUser, token]);

	return isRefreshing;
};

export default useRefreshUser;
