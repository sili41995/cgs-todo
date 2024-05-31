import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IProps } from './linkWithQuery.types';

const LinkWithQuery: FC<IProps> = ({ children, to, ...otherProps }) => {
	const { search } = useLocation();
	const path = to + search;

	return (
		<Link to={path} {...otherProps}>
			{children}
		</Link>
	);
};

export default LinkWithQuery;
