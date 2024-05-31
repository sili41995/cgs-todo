import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { selectIsLoggedIn } from '~store/auth/selectors';
import { useAuthStore } from '~store/store';
import { IProps } from './publicRoute.types';

export const PublicRoute: FC<IProps> = ({ element, restricted = false }) => {
	const isLoggedIn = useAuthStore(selectIsLoggedIn);
	const location = useLocation();
	const shouldRedirect = isLoggedIn && restricted;
	const defaultGoBackPath = `/${ROUTER_KEYS.DASHBOARD}`;
	const goBackPath = location.state?.from ?? defaultGoBackPath;

	return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
