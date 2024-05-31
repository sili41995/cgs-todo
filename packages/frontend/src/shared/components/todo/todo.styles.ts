import styled from '@emotion/styled';
import { IStyledDateProps, IStyledStatusProps } from './todo.types';

export const Container = styled.div`
	width: 100%;
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
`;

export const Title = styled.p`
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-size: 22px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};

	&:not(:last-of-type) {
		margin-bottom: ${({ theme }): string => theme.spacing(10)};
	}
`;

export const Text = styled.p`
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-size: 18px;
	font-weight: ${({ theme }): number => theme.fontWeight.other};
	line-height: 1.33;

	&:not(:last-of-type) {
		margin-bottom: ${({ theme }): string => theme.spacing(10)};
	}
`;

export const Date = styled.strong<IStyledDateProps>`
	color: ${({ theme, isPast }): string =>
		isPast ? theme.colors.lightgrey : theme.colors.primaryFont};
`;

export const Status = styled.strong<IStyledStatusProps>`
	color: ${({ theme, complete }): string =>
		complete ? theme.colors.green : theme.colors.red};
`;
