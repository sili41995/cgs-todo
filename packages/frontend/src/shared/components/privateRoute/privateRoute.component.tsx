import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { selectIsLoggedIn, selectIsRefreshing } from '~store/auth/selectors';
import { useAuthStore } from '~store/store';
import { IProps } from './privateRoute.types';

const PrivateRoute: FC<IProps> = ({ element }) => {
	const isLoggedIn = useAuthStore(selectIsLoggedIn);
	const isRefreshing = useAuthStore(selectIsRefreshing);
	const location = useLocation();
	const shouldRedirect = !isLoggedIn && !isRefreshing;
	const homePath = ROUTER_KEYS.ROOT;

	return shouldRedirect ? (
		<Navigate to={homePath} state={{ from: location }} />
	) : (
		element
	);
};

export default PrivateRoute;
