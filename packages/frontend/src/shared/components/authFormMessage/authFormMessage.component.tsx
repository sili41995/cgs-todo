import React, { FC } from 'react';
import { Message } from './authFormMessage.styles';
import { Link } from 'react-router-dom';
import { IProps } from './authFormMessage.types';

const AuthFormMessage: FC<IProps> = ({ message, pageLink, action }) => (
	<Message>
		<Link to={pageLink}>{action}</Link>
		{message && ` ${message}`}
	</Message>
);

export default AuthFormMessage;
