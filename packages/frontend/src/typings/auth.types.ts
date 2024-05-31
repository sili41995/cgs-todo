import { ChangeEvent, MouseEvent } from 'react';
import {
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { SetURLSearchParams } from 'react-router-dom';
import { StorageValue } from 'zustand/middleware';
import { ROUTER_KEYS } from '~shared/keys';

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type LinkClickEvent = MouseEvent<HTMLAnchorElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface INavLink {
	title: string;
	path: ROUTER_KEYS;
}

export type NavLinks = INavLink[];
export interface IUser {
	id: number;
	name: string;
	password: string;
	email: string;
	token: string | null | undefined;
	verifyToken: string | null;
	restorePasswordToken: string | null;
	isVerify: boolean;
}

export type NewUser = Pick<IUser, 'email' | 'name' | 'password'>;

export type Credentials = Pick<IUser, 'email' | 'password'>;

export type Name = Pick<IUser, 'name'>;

export type Email = Pick<IUser, 'email'>;

export type Password = Pick<IUser, 'password'>;

export interface INewPassword {
	password: string;
	passwordRepeat?: string;
}

export type SuccessUserRes = Pick<IUser, 'id' | 'email' | 'name'>;

export type AuthRes = Pick<IUser, 'name' | 'email' | 'token' | 'id'>;

export type SignOutRes = Pick<IUser, 'id'>;

export type GetStateFunc<T> = () => T;

export type SetState<T> = (data: Partial<T>) => void;

export interface ISetStateProps<T> {
	set: SetStateFunc<T>;
	name: string;
}

export type SetStateFunc<T> = (
	partial: Partial<T>,
	replaceState?: boolean,
	actionName?: string,
) => void;

export type SetAuthStateFunc = SetStateFunc<IAuthState>;

export interface ISignInOperationProps {
	set: SetAuthStateFunc;
	data: Credentials;
}

export interface IAuthOperationProps {
	set: SetAuthStateFunc;
}

export interface IUpdatePassProps {
	password: string;
	token: string;
}

export interface IUserState {
	id: null | number;
	name: null | string;
	email: null | string;
}

export interface IAuthInitialState {
	user: IUserState;
	token: null | string;
	isLoggedIn: boolean;
	isRefreshing: boolean;
	isLoading: boolean;
	error: null | string;
}

export interface IAuthState extends IAuthInitialState {
	signUp: (data: NewUser) => Promise<SuccessUserRes | undefined>;
	signIn: (data: Credentials) => Promise<AuthRes | undefined>;
	signOut: () => Promise<SignOutRes | undefined>;
	refreshUser: () => Promise<AuthRes | undefined>;
}

export interface IAuthStateLS {
	state: IAuthState;
}

export type GetLSGetItem =
	| StorageValue<IAuthState>
	| Promise<StorageValue<IAuthState>>;

export interface IUseVerifyEmail {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
}

export interface IUseUpdatePassForm {
	isLoading: boolean;
	handleFormSubmit: SubmitHandler<INewPassword>;
	handleSubmit: UseFormHandleSubmit<INewPassword, undefined>;
	register: UseFormRegister<INewPassword>;
	validatePassRepeatField: (value: string) => boolean;
}

export interface IUseSignUpForm {
	register: UseFormRegister<NewUser>;
	isLoading: boolean;
	handleSubmit: UseFormHandleSubmit<NewUser, undefined>;
	handleFormSubmit: SubmitHandler<NewUser>;
	signInPath: string;
}

export interface IUseSignInForm {
	handleFormSubmit: SubmitHandler<Credentials>;
	handleSubmit: UseFormHandleSubmit<Credentials, undefined>;
	register: UseFormRegister<Credentials>;
	signUpPath: string;
	forgotPasswordPath: string;
	isLoading: boolean;
}

export interface IUseSignOut {
	onSignOutBtnClick: (e: BtnClickEvent) => void;
	isLoading: boolean;
}

export interface IUseForgotPassForm {
	isLoading: boolean;
	handleFormSubmit: SubmitHandler<Email>;
	handleSubmit: UseFormHandleSubmit<Email, undefined>;
	register: UseFormRegister<Email>;
}

export interface IUseSlider {
	onPrevBtnClick: () => void;
	onNextBtnClick: () => void;
}

export interface IUpdateSearchParamsProps {
	key: string;
	value: string;
}

export interface IUseSetSearchParams {
	updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams;
}

export interface IUseFilter {
	onFilterChange: (e: InputChangeEvent) => void;
	isCompletedStatus: boolean;
	showFilter: boolean;
	filter: string;
	onFilterBtnClick: (e: BtnClickEvent) => void;
	onSortBtnClick: (e: BtnClickEvent) => void;
}

export interface IRegExp {
	email: RegExp;
}
