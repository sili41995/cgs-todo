import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	padding-left: ${({ theme }): number => theme.padding.container}px;
	padding-right: ${({ theme }): number => theme.padding.container}px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (max-width: 767px) {
		max-width: 500px;
	}

	@media screen and (min-width: 768px) {
		max-width: 1200px;
	}
`;
