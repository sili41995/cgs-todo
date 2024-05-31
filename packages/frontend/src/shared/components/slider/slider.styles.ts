import styled from '@emotion/styled';

export const Container = styled.div`
	display: none;

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		& {
			display: block;
		}
	}
`;

export const TabletIOGuard = styled.div``;
