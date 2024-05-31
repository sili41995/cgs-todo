import operationWrapper from '~store/operationWrapper';
import {
	ISignInOperationProps,
	IAuthOperationProps,
	AuthRes,
	SignOutRes,
	SuccessUserRes,
} from '~typings/auth.types';
import authService from '~shared/services/auth.service';
import initialState from './initialState';
import { AxiosError } from 'axios';

const signUpOperation = async ({ data }): Promise<SuccessUserRes | undefined> =>
	await authService.signUp(data);

const signInOperation = async ({
	set,
	data,
}: ISignInOperationProps): Promise<AuthRes | undefined> => {
	const result = await authService.signIn(data);
	set({
		user: { email: result.email, name: result.name, id: result.id },
		token: result.token,
		isLoggedIn: true,
	});
	return result;
};

const signOutOperation = async ({
	set,
}: IAuthOperationProps): Promise<SignOutRes | undefined> => {
	const result = await authService.signOut();
	set({
		user: initialState.user,
		token: initialState.token,
		isLoggedIn: initialState.isLoggedIn,
	});
	return result;
};

const refreshUserOperation = async ({
	set,
}: IAuthOperationProps): Promise<AuthRes | undefined> => {
	try {
		set({ isRefreshing: true, isLoading: true, error: initialState.error });
		const result = await authService.refreshUser();
		set({
			user: { name: result.name, email: result.email, id: result.id },
			token: result.token,
			isLoggedIn: true,
		});
		return result;
	} catch (error) {
		if (error instanceof AxiosError) {
			set({ error: error.message });
			throw new Error(error.response.data.message);
		}
	} finally {
		set({
			isLoading: initialState.isLoading,
			isRefreshing: initialState.isRefreshing,
		});
	}
};

export const signUp = operationWrapper(signUpOperation);
export const signIn = operationWrapper(signInOperation);
export const signOut = operationWrapper(signOutOperation);
export const refreshUser = refreshUserOperation;
