import React, { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import NavLinks from '~shared/components/navLinks';
import Container from '~shared/components/container';
import {
	IconSizes,
	authNavLinks,
	privateNavLinks,
	publicNavLinks,
} from '~/constants';
import PrivateLinks from '~shared/components/privateLinks';
import { Menu, MenuCloseBtn } from './mobileMenu.styles';
import { IProps } from './mobileMenu.types';
import { useAuthStore } from '~store/store';
import { selectIsLoggedIn } from '~store/auth/selectors';

const MobileMenu: FC<IProps> = ({ setShowMobileMenu }) => {
	const isLoggedIn = useAuthStore(selectIsLoggedIn);
	const navLinks = isLoggedIn
		? [...publicNavLinks, ...privateNavLinks]
		: publicNavLinks;

	return (
		<Menu>
			<Container>
				<MenuCloseBtn type="button" onClick={setShowMobileMenu}>
					<IoClose size={IconSizes.secondary} />
				</MenuCloseBtn>
				<NavLinks navLinks={navLinks} setShowMobileMenu={setShowMobileMenu} />
				{isLoggedIn ? (
					<PrivateLinks setShowMobileMenu={setShowMobileMenu} />
				) : (
					<NavLinks
						navLinks={authNavLinks}
						setShowMobileMenu={setShowMobileMenu}
					/>
				)}
			</Container>
		</Menu>
	);
};

export default MobileMenu;
