import styled from '@emotion/styled';
import { IStyledProps } from './checkbox.types';

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.span`
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-weight: ${({ theme }): number => theme.fontWeight.other};
	font-size: ${({ theme }): number => theme.fontSize.primary}px;
	letter-spacing: 0.04em;
`;

export const AltElem = styled.label<IStyledProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ theme }): string => theme.spacing(1.75)};
	border: 2px solid;
	border-color: ${({ checked, theme }): string =>
		checked ? 'transparent' : theme.colors.lightgrey};
	border-radius: ${({ theme }): number => theme.borderRadius.primary}px;
	background-color: ${({ checked, theme }): string =>
		checked ? theme.colors.primary : 'transparent'};
	cursor: pointer;
	transition:
		box-shadow ${({ theme }): string => theme.transitionDurationAndFunc},
		background-color ${({ theme }): string => theme.transitionDurationAndFunc},
		border-color ${({ theme }): string => theme.transitionDurationAndFunc};

	& input {
		position: fixed;
		transform: scale(0);
	}

	&:has([type='checkbox']) svg {
		color: ${({ theme, checked }): string =>
			checked ? theme.colors.white : 'transparent'};
		transition: color ${({ theme }): string => theme.transitionDurationAndFunc};
	}

	&:hover,
	&:focus {
		box-shadow: ${({ theme }): string => theme.shadows.primary};
	}
`;
