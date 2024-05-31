import styled from '@emotion/styled';

export const List = styled.ul`
	display: flex;
	gap: ${({ theme }): string => theme.spacing(5)};

	@media screen and (max-width: 1279px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const ListItem = styled.li`
	& a {
		display: block;
		min-width: 100px;
		padding: ${({ theme }): string => theme.spacing(3)};
		border-radius: ${({ theme }): number => theme.borderRadius.secondary}px;
		border: 1px solid;
		border-color: ${({ theme }): string => theme.colors.white};
		color: ${({ theme }): string => theme.colors.white};
		font-family: ${({ theme }): string => theme.fontFamily.primary};
		font-size: ${({ theme }): number => theme.fontSize.primary}px;
		font-weight: ${({ theme }): number => theme.fontWeight.primary};
		text-align: center;
		transition:
			color ${({ theme }): string => theme.transitionDurationAndFunc},
			background-color ${({ theme }): string => theme.transitionDurationAndFunc};

		&:is(:hover, :focus, .active) {
			color: ${({ theme }): string => theme.colors.other};
			background-color: ${({ theme }): string => theme.colors.white};
		}
	}
`;
