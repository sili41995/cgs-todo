import { Request } from 'express';

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

export type UpdatePasswordProps = Pick<
	IUser,
	'restorePasswordToken' | 'password'
>;

export type RestorePasswordRes = Pick<
	IUser,
	'id' | 'email' | 'name' | 'restorePasswordToken'
>;

export type SuccessUserRes = Pick<IUser, 'id' | 'name' | 'email'>;

export type LoginRes = Omit<
	IUser,
	'password' | 'verifyToken' | 'isVerify' | 'restorePasswordToken'
>;

export type RegisterRes = Omit<
	IUser,
	'password' | 'isVerify' | 'token' | 'restorePasswordToken'
>;

export type LogoutRes = Pick<IUser, 'id'>;

export type Credentials = Pick<IUser, 'password' | 'email'>;

export type NewUser = Omit<
	IUser,
	'id' | 'token' | 'verifyToken' | 'isVerify' | 'restorePasswordToken'
>;

export type SavedUser = Omit<
	IUser,
	'password' | 'isVerify' | 'verifyToken' | 'restorePasswordToken'
>;

export type UserEmail = Pick<IUser, 'email'>;

export interface IAuthRequest extends Request {
	body: IUser;
	user?: SavedUser;
}

export interface IDecodedToken {
	id: number;
}

export interface IRegExp {
	email: RegExp;
	notEmptyValue: RegExp;
}

export interface ISendEmailProps {
	userEmail: string;
	token: string;
	title: string;
	path: string;
}
