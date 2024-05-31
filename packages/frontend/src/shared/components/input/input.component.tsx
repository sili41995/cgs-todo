import React, { FC } from 'react';
import { IProps } from './input.types';
import { Label, Title, StyledInput } from './input.styles';

const Input: FC<IProps> = ({ settings, type, label, ...otherProps }) => {
	const input = <StyledInput type={type} {...settings} {...otherProps} />;

	return label ? (
		<Label>
			<Title>{label}</Title>
			{input}
		</Label>
	) : (
		input
	);
};

export default Input;
