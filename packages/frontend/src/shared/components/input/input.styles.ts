import styled from '@emotion/styled';
import { setInputFontSize, setInputHeight } from '~/utils';
import { IStyledProps } from './input.types';

export const StyledInput = styled.input<IStyledProps>`
	width: 100%;
	height: ${({ formType }): number => setInputHeight(formType)}px;
	background-color: transparent;
	border: 2px solid;
	border-color: ${({ theme }): string => theme.colors.lightgrey};
	border-radius: ${({ theme }): number => theme.borderRadius.primary}px;
	padding-left: ${({ theme }): string => theme.spacing(10)};
	padding-right: ${({ theme }): string => theme.spacing()};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-weight: ${({ theme }): number => theme.fontWeight.other};
	font-size: ${({ formType }): number => setInputFontSize(formType)}px;
	letter-spacing: 0.04em;
	transition: border-color
		${({ theme }): string => theme.transitionDurationAndFunc};

	&:is(:hover, :focus) {
		outline: none;
		border-color: ${({ theme }): string => theme.colors.primary};
	}

	&:is(:hover, :focus) + svg {
		transition: color ${({ theme }): string => theme.transitionDurationAndFunc};
		color: ${({ theme }): string => theme.colors.primary};
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }): string => theme.spacing()};
`;

export const Title = styled.span`
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-weight: ${({ theme }): number => theme.fontWeight.other};
	font-size: ${({ theme }): number => theme.fontSize.primary}px;
	letter-spacing: 0.04em;
`;
