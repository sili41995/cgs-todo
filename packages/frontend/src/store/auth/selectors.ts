import {
	AuthRes,
	Credentials,
	IAuthState,
	IUserState,
	NewUser,
	SignOutRes,
	SuccessUserRes,
} from '~typings/auth.types';

export const selectIsLoggedIn = (state: IAuthState): boolean =>
	state.isLoggedIn;

export const selectUser = (state: IAuthState): IUserState => state.user;

export const selectIsLoading = (state: IAuthState): boolean => state.isLoading;

export const selectToken = (state: IAuthState): string | null => state.token;

export const selectIsRefreshing = (state: IAuthState): boolean =>
	state.isRefreshing;

export const selectSignUp = (
	state: IAuthState,
): ((data: NewUser) => Promise<SuccessUserRes>) => state.signUp;

export const selectSignIn = (
	state: IAuthState,
): ((data: Credentials) => Promise<AuthRes>) => state.signIn;

export const selectRefreshUser = (
	state: IAuthState,
): (() => Promise<AuthRes>) => state.refreshUser;

export const selectSignOut = (state: IAuthState): (() => Promise<SignOutRes>) =>
	state.signOut;
