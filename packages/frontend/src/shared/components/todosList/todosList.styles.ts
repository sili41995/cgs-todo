import styled from '@emotion/styled';

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }): string => theme.spacing(5)};
	width: 100%;

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		& {
			display: none;
		}
	}
`;

export const MobileIOGuard = styled.div`
	@media screen and (min-width: 768px) {
		& {
			display: none;
		}
	}
`;
