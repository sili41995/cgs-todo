import styled from '@emotion/styled';

export const Title = styled.p`
	margin-bottom: ${({ theme }): string => theme.spacing(5)};
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.secondary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.other};
	text-align: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }): string => theme.spacing(5)};
`;
