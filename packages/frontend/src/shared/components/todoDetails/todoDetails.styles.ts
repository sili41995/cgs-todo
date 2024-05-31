import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }): string => theme.spacing(5)};
	align-items: center;
	flex-grow: 1;
`;

export const ButtonsList = styled.ul`
	display: flex;
	gap: ${({ theme }): string => theme.spacing(3)};
	justify-content: flex-end;
`;

export const ListItem = styled.li``;
