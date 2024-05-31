import styled from '@emotion/styled';
import { IStyledProps } from './paginationBar.types';
import { setBtnDisplayProp } from '~/utils';

export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	margin-top: ${({ theme }): string => theme.spacing(10)};

	@media screen and (max-width: 1279px) {
		& {
			display: none;
		}
	}
`;

export const Item = styled.li<IStyledProps>`
	display: ${({ currentPage, page, step }): string =>
		setBtnDisplayProp({ currentPage, page, step })};
`;

export const TemplateItem = styled.li`
	& button {
		cursor: default;
		&:is(:hover, :focus) {
			box-shadow: none;
		}
	}
`;

export const Button = styled.button`
	min-width: 30px;
	padding: ${({ theme }): string => theme.spacing(2)};
	background-color: transparent;
	border-color: transparent;
	border-radius: ${({ theme }): number => theme.borderRadius.secondary}px;
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.secondary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};
	transition: box-shadow
		${({ theme }): string => theme.transitionDurationAndFunc};
	&.active {
		background-color: ${({ theme }): string => theme.colors.other};
	}
	&:is(:hover, :focus, :active) {
		outline: none;
		box-shadow: ${({ theme }): string => theme.shadows.primary};
	}
`;
