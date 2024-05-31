import styled from '@emotion/styled';

export const Button = styled.button`
	min-width: 170px;
	height: 60px;
	padding-left: ${({ theme }): string => theme.spacing(8)};
	padding-right: ${({ theme }): string => theme.spacing(8)};
	align-self: center;
	background-color: ${({ theme }): string => theme.colors.primary};
	border-color: transparent;
	border-radius: ${({ theme }): number => theme.borderRadius.primary}px;
	color: ${({ theme }): string => theme.colors.white};
	text-align: center;
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.primary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};
	line-height: 1.5;
	letter-spacing: 0.64px;
	transition: background-color
		${({ theme }): string => theme.transitionDurationAndFunc};

	& svg {
		height: 40px;
		fill: ${({ theme }): string => theme.colors.white};
	}

	&:hover,
	&:focus {
		background-color: ${({ theme }): string => theme.colors.secondary};
	}
`;
