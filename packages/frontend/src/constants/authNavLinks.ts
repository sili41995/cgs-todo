import { ROUTER_KEYS } from '~shared/keys';
import { NavLinks } from '~typings/auth.types';

const authNavLinks: NavLinks = [
	{ title: 'Sign In', path: ROUTER_KEYS.SIGN_IN },
	{ title: 'Sign Up', path: ROUTER_KEYS.SIGN_UP },
];

export default authNavLinks;
