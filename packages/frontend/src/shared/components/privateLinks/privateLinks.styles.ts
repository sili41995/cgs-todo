import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	gap: ${({ theme }): string => theme.spacing(5)};

	@media screen and (max-width: 1279px) {
		flex-direction: column;
		width: 100%;

		& > div {
			display: none;
		}
	}

	& > a {
		display: flex;
		gap: ${({ theme }): string => theme.spacing(5)};
		justify-content: center;
		align-items: center;
		border-radius: ${({ theme }): number => theme.borderRadius.secondary}px;
		background-color: ${({ theme }): string => theme.colors.greenBtn};
		padding: ${({ theme }): string => `0 ${theme.spacing(3)}`};
		color: ${({ theme }): string => theme.colors.primaryFont};
		font-family: ${({ theme }): string => theme.fontFamily.primary};
		font-size: ${({ theme }): number => theme.fontSize.primary}px;
		font-weight: ${({ theme }): number => theme.fontWeight.primary};
		transition: background-color
			${({ theme }): string => theme.transitionDurationAndFunc};

		&:is(:hover, :focus) {
			background-color: ${({ theme }): string => theme.colors.green};
		}

		@media screen and (max-width: 1279px) {
			padding: ${({ theme }): string => theme.spacing(4)};
		}
	}

	& > button {
		display: flex;
		gap: ${({ theme }): string => theme.spacing(5)};
		width: auto;
		height: 100%;
		border-radius: ${({ theme }): number => theme.borderRadius.secondary}px;
		padding: ${({ theme }): string => `0 ${theme.spacing(3)}`};
		color: ${({ theme }): string => theme.colors.primaryFont};
		font-family: ${({ theme }): string => theme.fontFamily.primary};
		font-size: ${({ theme }): number => theme.fontSize.primary}px;
		font-weight: ${({ theme }): number => theme.fontWeight.primary};
		transition:
			background-color ${({ theme }): string => theme.transitionDurationAndFunc},
			color ${({ theme }): string => theme.transitionDurationAndFunc};

		& svg {
			transition: color
				${({ theme }): string => theme.transitionDurationAndFunc};
		}

		&:is(:hover, :focus) {
			background-color: ${({ theme }): string => theme.colors.redIcon};
			color: ${({ theme }): string => theme.colors.white};
			box-shadow: none;

			& svg {
				color: ${({ theme }): string => theme.colors.white};
				transition: color
					${({ theme }): string => theme.transitionDurationAndFunc};
			}
		}

		@media screen and (max-width: 1279px) {
			padding: ${({ theme }): string => theme.spacing(4)};
		}
	}
`;

export const BtnTitle = styled.span``;
