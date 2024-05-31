import React, { FC } from 'react';
import { BtnTypes } from '~/constants';
import { IProps } from './iconButton.types';
import { BtnTitle, Button } from './iconButton.styles';

const IconButton: FC<IProps> = ({
	type = BtnTypes.button,
	ariaLabel,
	icon,
	iconBtnType,
	title,
	disabled,
	onClick,
}) => (
	<Button
		type={type}
		aria-label={ariaLabel}
		onClick={onClick}
		iconBtnType={iconBtnType}
		disabled={disabled}
	>
		{title ? (
			<>
				{icon}
				<BtnTitle>{title}</BtnTitle>
			</>
		) : (
			icon
		)}
	</Button>
);

export default IconButton;
