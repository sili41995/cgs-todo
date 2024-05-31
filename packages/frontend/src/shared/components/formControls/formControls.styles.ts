import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
	display: flex;
	justify-content: center;
	gap: ${({ theme }): string => theme.spacing(5)};
`;

export const ListItem = styled.li``;
