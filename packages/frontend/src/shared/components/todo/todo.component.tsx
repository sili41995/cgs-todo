import React, { FC } from 'react';
import { getDeadlineParams } from '~/utils';
import { IProps } from './todo.types';
import { Date, Status, Text, Title, Container } from './todo.styles';

const EventDetails: FC<IProps> = ({ todo }) => {
	const { title, description, complete, date } = todo;
	const { taskDeadline, isPastDate } = getDeadlineParams(date);
	const status = complete ? 'Completed' : 'Unfinished';

	return (
		<Container>
			<Title>Title: {title}</Title>
			<Text>Todo: {description}</Text>
			<Text>
				Deadline: <Date isPast={isPastDate}>{taskDeadline}</Date>
			</Text>
			<Text>
				Status:
				<Status complete={complete}>{status}</Status>
			</Text>
		</Container>
	);
};

export default EventDetails;
