import React, { FC } from 'react';
import { IProps } from './defaultMessage.types';
import { Message } from './defaultMessage.styles';

const DefaultMessage: FC<IProps> = ({ message }) => (
	<Message>{message}</Message>
);

export default DefaultMessage;
