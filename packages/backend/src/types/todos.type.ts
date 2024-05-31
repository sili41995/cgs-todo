import { Request } from 'express';
import { SavedUser } from './user.type';

export interface IHttpError {
	status: number;
	message?: string;
	meta?: { cause: string };
}

export interface IErrorMessageList {
	[key: number]: string;
}

export interface ITodo {
	id: number;
	title: string;
	description: string;
	private: boolean;
	complete: boolean;
	date: string;
	owner: number;
}

export interface IFindAllTodosProps {
	owner: number;
	title?: string;
	complete?: boolean;
	skip: number;
	take: number;
}

export type FindAllTodosRes = Promise<{ todos: ITodo[]; count: number }>;

export type FindTodoByIdProps = Pick<ITodo, 'id' | 'owner'>;

export type DeleteTodoByIdProps = Pick<ITodo, 'id' | 'owner'>;

export type NewTodo = Omit<ITodo, 'id'>;

export interface IUpdateTodoByIdProps {
	id: number;
	data: NewTodo;
	owner: number;
}

export interface ITodoRequest extends Request {
	body: ITodo;
	user?: SavedUser;
}
