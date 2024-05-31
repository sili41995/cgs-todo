import { FormTypes } from '~/constants';
import { ITodo, SetTodo } from '~typings/todos.types';

export interface IProps {
	todo: ITodo;
	formType: FormTypes;
	setTodo: SetTodo;
}
