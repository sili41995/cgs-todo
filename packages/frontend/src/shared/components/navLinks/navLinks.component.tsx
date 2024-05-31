import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IProps } from './navLinks.types';
import { List, ListItem } from './navLinks.styles';

const NavLinks: FC<IProps> = ({ navLinks, setShowMobileMenu }) => (
	<List>
		{navLinks.map(({ path, title }) => (
			<ListItem key={path}>
				<NavLink to={path} onClick={setShowMobileMenu}>
					{title}
				</NavLink>
			</ListItem>
		))}
	</List>
);

export default NavLinks;
