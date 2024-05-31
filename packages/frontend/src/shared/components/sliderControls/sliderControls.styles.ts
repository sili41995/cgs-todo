import styled from '@emotion/styled';

export const List = styled.ul`
	display: flex;
	justify-content: center;
	gap: ${({ theme }): string => theme.spacing(12)};
	margin-top: ${({ theme }): string => theme.spacing(6)};

	@media screen and (min-width: 1280px) {
		margin-top: ${({ theme }): string => theme.spacing(12)};
	}
`;

export const ListItem = styled.li``;

export const Button = styled.button`
	background-color: transparent;
	border: none;
	color: ${({ theme }): string => theme.colors.primary};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.other}px;
	font-weight: 400;
	line-height: 1;
`;
