import styled from '@emotion/styled';

export const FilterContainer = styled.div`
	display: flex;
	gap: ${({ theme }): string => theme.spacing(5)};

	& button {
		height: 100%;
	}

	& input {
		height: 100%;
		color: ${({ theme }): string => theme.colors.white};
	}
`;

export const ButtonsList = styled.ul`
	display: flex;
	gap: ${({ theme }): string => theme.spacing(5)};
`;

export const Item = styled.li``;
