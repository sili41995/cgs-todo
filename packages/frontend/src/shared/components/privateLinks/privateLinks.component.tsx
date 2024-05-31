import React, { FC } from 'react';
import { SlLogout, SlPlus } from 'react-icons/sl';
import LinkWithQuery from '~shared/components/linkWithQuery';
import { makeBlur } from '~/utils';
import { LinkClickEvent } from '~typings/auth.types';
import { ROUTER_KEYS } from '~shared/keys';
import Filter from '~shared/components/filter';
import { BtnTitle, Container } from './privateLinks.styles';
import { IProps } from './privateLinks.types';
import IconButton from '~shared/components/iconButton';
import { AriaLabels, IconBtnTypes, IconSizes } from '~/constants';
import { useSignOut } from '~/hooks';

const PrivateLinks: FC<IProps> = ({ setShowMobileMenu }) => {
	const { onSignOutBtnClick, isLoading } = useSignOut();
	const addTodoLink = `/${ROUTER_KEYS.NEW_TODO}`;

	const onNewTodoLinkClick = (e: LinkClickEvent): void => {
		makeBlur(e.currentTarget);
		setShowMobileMenu && setShowMobileMenu();
	};

	return (
		<Container>
			<Filter />
			<LinkWithQuery to={addTodoLink} onClick={onNewTodoLinkClick}>
				<SlPlus />
				<BtnTitle>New Todo</BtnTitle>
			</LinkWithQuery>
			<IconButton
				iconBtnType={IconBtnTypes.signOut}
				onClick={onSignOutBtnClick}
				icon={<SlLogout size={IconSizes.secondary} />}
				title="Sign Out"
				ariaLabel={AriaLabels.signOut}
				disabled={isLoading}
			/>
		</Container>
	);
};

export default PrivateLinks;
