import styled from '@emotion/styled';
import { IStyledProps } from './todosListItem.types';

export const ListItem = styled.li`
	position: relative;
	border: 1px solid;
	border-radius: ${({ theme }): number => theme.borderRadius.primary}px;
	border-color: ${({ theme }): string => theme.colors.lightgrey};
	transition: box-shadow
		${({ theme }): string => theme.transitionDurationAndFunc};

	&:hover,
	&:focus {
		box-shadow: ${({ theme }): string => theme.shadows.primary};
	}

	& > a {
		display: block;
		padding: ${({ theme }): string => theme.spacing(3)};
		padding-right: ${({ theme }): string => theme.spacing(12)};
	}

	& > button {
		position: absolute;
		top: 0;
		right: 0;
	}
`;

export const Task = styled.p<IStyledProps>`
	color: ${({ theme }): string => theme.colors.primary};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.secondary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};
	text-decoration: ${({ completed }): string =>
		completed ? 'line-through' : 'none'};
	${({ theme }): string => theme.trimText};
`;
