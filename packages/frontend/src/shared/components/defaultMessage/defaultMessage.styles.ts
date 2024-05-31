import styled from '@emotion/styled';

export const Message = styled.p`
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.secondary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.primary};
`;
