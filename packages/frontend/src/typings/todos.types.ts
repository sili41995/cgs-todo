import {
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { BtnClickEvent, GetStateFunc, SetStateFunc } from './auth.types';
import { MutableRefObject } from 'react';

export interface ITodo {
	id: number;
	title: string;
	description: string;
	private: boolean;
	complete: boolean;
	date: string;
	owner: number;
}

export type Todos = ITodo[];

export type NewTodo = Omit<ITodo, 'id'>;

export type Title = Pick<ITodo, 'title'>;

export type Description = Pick<ITodo, 'description'>;

export type DateField = Pick<ITodo, 'date'>;

export type SetTodo = (todo: ITodo) => void;

export interface IGetUpdatedTodosProps {
	todos: Todos;
	updatedTodo: Partial<ITodo>;
}

export interface IGetFilteredTodosAfterDeleteProps {
	todos: Todos;
	todoId: number;
}

export interface IDeadlineParams {
	taskDeadline: string;
	isPastDate: boolean;
}

export interface IFetchTodosData {
	search: string;
	status: string;
	page: number;
	limit: number;
}

export interface IUpdateTodoData {
	data: NewTodo;
	id: number;
}

export interface IFetchTodoByIdProps {
	signal: AbortSignal;
	id: number;
}

export interface IAddTodoProps {
	set: SetTodosStateFunc;
	get: GetTotosStateFunc;
	data: NewTodo;
}

export interface IUpdateTodoProps {
	set: SetTodosStateFunc;
	get: GetTotosStateFunc;
	data: IUpdateTodoData;
}

export interface IDeleteTodoProps {
	set: SetTodosStateFunc;
	get: GetTotosStateFunc;
	data: number;
}

export interface ITodosInitialState {
	items: Todos;
	count: null | number;
	isLoading: boolean;
	isLoaded: boolean;
	error: null | string;
}

export interface IFetchTodosRes {
	todos: Todos;
	count: number;
}

export interface ITodosState extends ITodosInitialState {
	fetchTodos: (data: IFetchTodosData) => Promise<IFetchTodosRes | undefined>;
	addTodo: (data: NewTodo) => Promise<ITodo | undefined>;
	deleteTodo: (id: number) => Promise<ITodo | undefined>;
	updateTodo: (data: IUpdateTodoData) => Promise<ITodo | undefined>;
}

export type GetTotosStateFunc = GetStateFunc<ITodosState>;

export type SetTodosStateFunc = SetStateFunc<ITodosState>;

export interface IUseTodosPage {
	isLoading: boolean;
	showTodosList: boolean;
	todos: Todos;
}

export interface IUseTargetTodo {
	id: string;
	todo: ITodo;
	setTodo: (data: ITodo) => void;
	isLoadingTodo: boolean;
	isLoadedTodo: boolean;
	isError: boolean;
}

export interface IUseAddTodoForm {
	checked: boolean;
	register: UseFormRegister<NewTodo>;
	handleSubmit: UseFormHandleSubmit<NewTodo, undefined>;
	onAcceptBtnClick: (e: BtnClickEvent) => void;
	onResetBtnClick: (e: BtnClickEvent) => void;
	onCheckboxChange: () => void;
	handleFormSubmit: SubmitHandler<NewTodo>;
	isLoading: boolean;
}

export interface IUseEditTodoForm {
	checked: boolean;
	register: UseFormRegister<NewTodo>;
	handleSubmit: UseFormHandleSubmit<NewTodo, undefined>;
	onAcceptBtnClick: (e: BtnClickEvent) => void;
	onResetBtnClick: (e: BtnClickEvent) => void;
	onCheckboxChange: () => void;
	handleFormSubmit: SubmitHandler<NewTodo>;
	isLoading: boolean;
	taskDeadline: string;
}

export interface IUseEditTodoFormProps {
	todo: ITodo;
	setTodo: SetTodo;
}

export interface IUseDeleteTodo {
	deleteTodo: (id: number) => void;
	isLoading: boolean;
}

export interface IGetPaginationBarSettingsProps {
	pageNumbers: number[];
	currentPage: number;
	step: number;
}

export interface IGetPaginationBarSettings {
	isValidPage: boolean;
	firstPage: number;
	lastPage: number;
	isBackNavBtnDisable: boolean;
	isNextNavBtnDisable: boolean;
	isShowNextTemplateBtn: boolean;
	isShowLastPageBtn: boolean;
	isShowFirstPageBtn: boolean;
	isShowPrevTemplateBtn: boolean;
	isLastPage: boolean;
}

export interface ISetBtnDisplayProps {
	currentPage: number;
	page: number;
	step: number;
}

export interface IOnPageBtnClickProps {
	e: BtnClickEvent | null;
	page: number;
}

export interface IUsePaginationBar {
	isBackNavBtnDisable: boolean;
	isShowFirstPageBtn: boolean;
	isShowPrevTemplateBtn: boolean;
	isValidPage: boolean;
	isShowNextTemplateBtn: boolean;
	isNextNavBtnDisable: boolean;
	isShowLastPageBtn: boolean;
	isLastPage: boolean;
	firstPage: number;
	pageNumbers: number[];
	currentPage: number;
	lastPage: number;
	step: number;
	onPrevPageBtnClick: (e: BtnClickEvent) => void;
	onFirstPageBtnClick: (e: BtnClickEvent) => void;
	setPage: ({ e, page }: IOnPageBtnClickProps) => void;
	onLastPageBtnClick: (e: BtnClickEvent) => void;
	onNextPageBtnClick: (e: BtnClickEvent) => void;
}

export type DOMElement = MutableRefObject<HTMLElement>;

export interface IUseGetMoreTodos {
	iOGuard: DOMElement;
	action?: () => void;
}
