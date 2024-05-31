import {
	Credentials,
	IAuthState,
	NewUser,
	SetAuthStateFunc,
	AuthRes,
	SignOutRes,
	SuccessUserRes,
	GetLSGetItem,
	IAuthStateLS,
} from '~typings/auth.types';
import initialState from './initialState';
import setState from '~store/setState';
import { refreshUser, signIn, signOut, signUp } from './operations';
import { getTokenFromLS } from '~/utils';

const authSlice = (set: SetAuthStateFunc): IAuthState => ({
	...initialState,
	token: getTokenFromLS(),
	signUp: async (data: NewUser): Promise<SuccessUserRes | undefined> =>
		await signUp({
			set: setState({ set, name: 'signUp' }),
			get: undefined,
			data,
		}),
	signIn: async (data: Credentials): Promise<AuthRes | undefined> =>
		await signIn({
			set: setState({ set, name: 'signIn' }),
			get: undefined,
			data,
		}),
	signOut: async (): Promise<SignOutRes | undefined> =>
		await signOut({
			set: setState({ set, name: 'signOut' }),
			get: undefined,
			data: undefined,
		}),
	refreshUser: async (): Promise<AuthRes | undefined> =>
		await refreshUser({
			set: setState({ set, name: 'refreshUser' }),
		}),
});

const storageParams = {
	name: 'token',
	storage: {
		getItem: (name: string): GetLSGetItem => {
			const value = localStorage.getItem(name);
			return value ? JSON.parse(value) : null;
		},
		setItem: (name: string, { state }: IAuthStateLS): void => {
			localStorage.setItem(name, JSON.stringify(state.token));
		},
		removeItem: (name: string): void => {
			localStorage.removeItem(name);
		},
	},
};

const devToolsParams = { name: 'authStore' };

const authStore = {
	store: authSlice,
	storageParams,
	devToolsParams,
};

export default authStore;
