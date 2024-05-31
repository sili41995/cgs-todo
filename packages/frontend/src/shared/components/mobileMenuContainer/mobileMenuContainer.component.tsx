import React, { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AriaLabels, IconSizes } from '~/constants';
import MobileMenu from '~shared/components/mobileMenu';
import { Container, MenuOpenBtn } from './mobileMenuContainer.styles';

const MobileMenuContainer: FC = () => {
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
	const setShowMobileMenuState = (): void => {
		setShowMobileMenu((prevState) => !prevState);
	};

	return (
		<Container>
			<MenuOpenBtn
				type="button"
				onClick={setShowMobileMenuState}
				aria-label={AriaLabels.openMobileMenu}
			>
				<FaBars size={IconSizes.secondary} />
			</MenuOpenBtn>
			{showMobileMenu && (
				<MobileMenu setShowMobileMenu={setShowMobileMenuState} />
			)}
		</Container>
	);
};

export default MobileMenuContainer;
