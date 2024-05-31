import { BtnClickEvent } from '~typings/auth.types';
import { ITodo, SetTodo } from '~typings/todos.types';

export interface IProps {
	todo: ITodo;
	onDelBtnClick: (e: BtnClickEvent) => void;
	isLoading: boolean;
	setTodo: SetTodo;
}
