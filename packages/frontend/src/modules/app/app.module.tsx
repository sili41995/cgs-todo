import React, { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRefreshUser } from '~/hooks';
import Loader from '~shared/components/loader';
import PrivateRoute from '~shared/components/privateRoute';
import PublicRoute from '~shared/components/publicRoute';
import SharedLayout from '~shared/components/sharedLayout';
import { ROUTER_KEYS } from '~shared/keys';

const SignInPage = lazy(() => import('~modules/signInPage'));
const SignUpPage = lazy(() => import('~modules/signUpPage'));
const VerifyPage = lazy(() => import('~modules/verifyPage'));
const ForgotPassPage = lazy(() => import('~modules/forgotPassPage'));
const UpdatePassPage = lazy(() => import('~modules/updatePassPage'));
const TodosPage = lazy(() => import('~modules/todosPage'));
const AddNewTodoPage = lazy(() => import('~modules/addNewTodoPage'));
const TodoDetailsPage = lazy(() => import('~modules/todoDetailsPage'));
const AboutPage = lazy(() => import('~modules/aboutPage'));
const NotFoundPage = lazy(() => import('~modules/notFoundPage'));

const App: FC = () => {
	const isRefreshing = useRefreshUser();

	return isRefreshing ? (
		<Loader />
	) : (
		<Routes>
			<Route
				path={ROUTER_KEYS.ROOT}
				element={<PublicRoute element={<SharedLayout />} />}
			>
				<Route
					index
					element={<PublicRoute restricted element={<SignInPage />} />}
				/>
				<Route
					path={ROUTER_KEYS.SIGN_UP}
					element={<PublicRoute restricted element={<SignUpPage />} />}
				/>
				<Route
					path={ROUTER_KEYS.SIGN_IN}
					element={<PublicRoute restricted element={<SignInPage />} />}
				/>
				<Route
					path={`${ROUTER_KEYS.VERIFY}/:${ROUTER_KEYS.DYNAMIC_TOKEN}`}
					element={<PublicRoute restricted element={<VerifyPage />} />}
				/>
				<Route
					path={`${ROUTER_KEYS.FORGOT_PASS}`}
					element={<PublicRoute restricted element={<ForgotPassPage />} />}
				/>
				<Route
					path={`${ROUTER_KEYS.UPD_PASS}/:${ROUTER_KEYS.DYNAMIC_TOKEN}`}
					element={<PublicRoute restricted element={<UpdatePassPage />} />}
				/>
				<Route
					path={ROUTER_KEYS.DASHBOARD}
					element={<PrivateRoute element={<TodosPage />} />}
				/>
				<Route
					path={`${ROUTER_KEYS.DASHBOARD}/:${ROUTER_KEYS.DYNAMIC_KEY}`}
					element={<PrivateRoute element={<TodoDetailsPage />} />}
				/>
				<Route
					path={ROUTER_KEYS.NEW_TODO}
					element={<PrivateRoute element={<AddNewTodoPage />} />}
				/>
				<Route
					path={ROUTER_KEYS.ABOUT}
					element={<PublicRoute element={<AboutPage />} />}
				/>
				<Route
					path={ROUTER_KEYS.ALL_MATCH}
					element={<PublicRoute element={<NotFoundPage />} />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
