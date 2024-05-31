import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.p`
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: 36px;
	font-weight: ${({ theme }): number => theme.fontWeight.other};
`;

export const Message = styled.p`
	color: ${({ theme }): string => theme.colors.primaryFont};
	font-family: ${({ theme }): string => theme.fontFamily.primary};
	font-size: ${({ theme }): number => theme.fontSize.primary}px;
	font-weight: ${({ theme }): number => theme.fontWeight.other};
`;
