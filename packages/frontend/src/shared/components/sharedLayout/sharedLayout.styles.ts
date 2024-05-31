import styled from '@emotion/styled';

export const Header = styled.header`
	display: inline-block;
	min-width: 100%;
	padding-top: ${({ theme }): string => theme.spacing(5)};
	padding-bottom: ${({ theme }): string => theme.spacing(5)};
	background-color: ${({ theme }): string => theme.colors.other};
`;

export const Main = styled.main``;

export const Section = styled.section`
	padding-top: ${({ theme }): number => theme.padding.container}px;
	padding-bottom: ${({ theme }): number => theme.padding.container}px;
`;
