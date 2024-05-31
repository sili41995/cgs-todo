import React, { FC } from 'react';
import { AltElem, InputContainer, Title } from './checkbox.styles';
import { IProps } from './checkbox.types';

const Checkbox: FC<IProps> = ({
	checked,
	type,
	settings,
	label,
	altElem,
	onChange,
}) => (
	<InputContainer>
		<Title>{label}</Title>
		<AltElem checked={checked}>
			<input type={type} {...settings} onChange={onChange} checked={checked} />
			{altElem}
		</AltElem>
	</InputContainer>
);

export default Checkbox;
