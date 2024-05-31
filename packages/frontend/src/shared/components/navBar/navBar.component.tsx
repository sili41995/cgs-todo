import React, { FC } from 'react';
import NavLinks from '~/shared/components/navLinks';
import PrivateLinks from '~/shared/components/privateLinks';
import { NavContainer } from './navBar.styles';
import { useAuthStore } from '~store/store';
import { selectIsLoggedIn } from '~store/auth/selectors';
import { authNavLinks, privateNavLinks, publicNavLinks } from '~/constants';

const NavBar: FC = () => {
	const isLoggedIn = useAuthStore(selectIsLoggedIn);
	const navLinks = isLoggedIn
		? [...publicNavLinks, ...privateNavLinks]
		: publicNavLinks;

	return (
		<NavContainer>
			<NavLinks navLinks={navLinks} />
			{isLoggedIn ? <PrivateLinks /> : <NavLinks navLinks={authNavLinks} />}
		</NavContainer>
	);
};

export default NavBar;
