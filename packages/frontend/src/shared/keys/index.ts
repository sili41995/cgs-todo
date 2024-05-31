export const enum ROUTER_KEYS {
	ALL_MATCH = '*',
	ROOT = '/',
	SIGN_UP = 'signup',
	SIGN_IN = 'signin',
	VERIFY = 'auth/verify',
	FORGOT_PASS = 'forgot-password',
	UPD_PASS = 'auth/forgot-password',
	ABOUT = 'about',
	DASHBOARD = 'dashboard',
	NEW_TODO = 'new-todo',
	DYNAMIC_KEY = 'id',
	DYNAMIC_TOKEN = 'token',
}

export const STORAGE_KEYS = Object.freeze({
	TOKEN: 'TOKEN',
});
