import { ITodo } from '~typings/todos.types';

export interface IProps {
	todo: ITodo;
}

export interface IStyledStatusProps {
	complete: boolean;
}

export interface IStyledDateProps {
	isPast: boolean;
}
