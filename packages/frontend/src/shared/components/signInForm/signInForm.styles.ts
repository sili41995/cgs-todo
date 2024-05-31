import styled from '@emotion/styled';

export const Title = styled.h2`
	text-transform: uppercase;
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.title}px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};
`;

export const Message = styled.p`
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.secondary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }): string => theme.spacing(5)};
`;
