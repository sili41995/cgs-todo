import styled from '@emotion/styled';
import { setBtnBGColor, setBtnIconColor } from '~/utils';
import { IStyledProps } from './iconButton.types';

export const Button = styled.button<IStyledProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 36px;
	border: none;
	border-radius: ${({ theme }): number => theme.borderRadius.primary}px;
	background-color: ${({ iconBtnType }): string => setBtnBGColor(iconBtnType)};
	transition: box-shadow
		${({ theme }): string => theme.transitionDurationAndFunc};

	&:is(:hover, :focus) {
		box-shadow: ${({ theme }): string => theme.shadows.primary};
	}

	& svg {
		color: ${({ iconBtnType }): string => setBtnIconColor(iconBtnType)};
	}
`;

export const BtnTitle = styled.span``;
