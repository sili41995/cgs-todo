import { format, isPast } from 'date-fns';
import { GeneralParams } from '~/constants';
import { IDeadlineParams } from '~typings/todos.types';

const getDeadlineParams = (deadline: string): IDeadlineParams => {
	const date = new Date(deadline);
	const taskDeadline = format(date, GeneralParams.fullDateFormat);
	const isPastDate = isPast(date);

	return { taskDeadline, isPastDate };
};

export default getDeadlineParams;
