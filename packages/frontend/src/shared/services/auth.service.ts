import {
	Credentials,
	NewUser,
	AuthRes,
	SignOutRes,
	SuccessUserRes,
	IUpdatePassProps,
	INewPassword,
	Email,
} from '~typings/auth.types';
import HttpSerivce from './http.service';

class AuthService extends HttpSerivce {
	constructor() {
		super();
	}

	async signUp(data: NewUser): Promise<SuccessUserRes | undefined> {
		const response = await this.post<SuccessUserRes, NewUser>({
			url: 'user/register',
			data,
		});

		return response.data;
	}

	async signIn(data: Credentials): Promise<AuthRes | undefined> {
		const response = await this.post<AuthRes, Credentials>({
			url: 'user/login',
			data,
		});

		return response.data;
	}

	async signOut(): Promise<SignOutRes | undefined> {
		const response = await this.post<SignOutRes, Credentials>({
			url: 'user/logout',
		});

		return response.data;
	}

	async refreshUser(): Promise<AuthRes | undefined> {
		const response = await this.get<AuthRes>({
			url: 'user/current',
		});

		return response.data;
	}

	async verifyEmail(token: string): Promise<SuccessUserRes | undefined> {
		const response = await this.get<SuccessUserRes>({
			url: `auth/${token}`,
		});

		return response.data;
	}

	async restorePassword(data: Email): Promise<SuccessUserRes> {
		const response = await this.post<SuccessUserRes, Email>({
			url: 'user/restore-password',
			data,
		});

		return response.data;
	}

	async updatePassword({
		token,
		...data
	}: IUpdatePassProps): Promise<SuccessUserRes> {
		const response = await this.patch<SuccessUserRes, INewPassword>({
			url: `user/restore-password/${token}`,
			data,
		});

		return response.data;
	}
}

const authService = new AuthService();

export default authService;
