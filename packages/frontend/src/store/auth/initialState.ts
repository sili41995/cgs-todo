import { IAuthInitialState } from '~typings/auth.types';

const initialState: IAuthInitialState = {
	user: {
		id: null,
		name: null,
		email: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	isLoading: false,
	error: null,
};

export default initialState;
