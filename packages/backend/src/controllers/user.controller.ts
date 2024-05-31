import { Response, Request } from 'express';
import UserService from '@/services/user.service';
import { httpError, sendEmail } from '@/utils';
import { AuthProps, Endpoints } from '@/constants';
import { IAuthRequest } from '@/types/user.type';

export class UserController {
	constructor(private userService: UserService) {
		this.userService = userService;
	}

	async register(req: Request, res: Response): Promise<void> {
		const result = await this.userService.register(req.body);

		if (!result.verifyToken) {
			throw httpError({ status: 400 });
		}

		sendEmail({
			userEmail: result.email,
			token: result.verifyToken,
			title: AuthProps.verifyEmailTitle,
			path: AuthProps.verifyEmailPath,
		});

		const updaterResult = { ...result, verifyToken: undefined };
		res.status(201).json(updaterResult);
	}

	async login(req: Request, res: Response): Promise<void> {
		const result = await this.userService.login(req.body);
		res.status(200).json(result);
	}

	async logout(req: IAuthRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 401 });
		}

		const result = await this.userService.logout(req.user);
		res.status(200).json(result);
	}

	async current(req: IAuthRequest, res: Response): Promise<void> {
		if (!req.user) {
			throw httpError({ status: 401 });
		}

		const result = { ...req.user, isVerify: undefined };
		res.status(200).json(result);
	}

	async restorePassword(req: Request, res: Response): Promise<void> {
		const result = await this.userService.restorePassword(req.body);

		if (!result.restorePasswordToken) {
			throw httpError({ status: 400 });
		}

		sendEmail({
			userEmail: result.email,
			token: result.restorePasswordToken,
			title: AuthProps.restorePasswordEmailTitle,
			path: AuthProps.restorePasswordEmailPath,
		});

		const updatedResult = { ...result, restorePasswordToken: undefined };

		res.status(200).json(updatedResult);
	}

	async updatePassword(req: Request, res: Response): Promise<void> {
		const restorePasswordToken = req.params[Endpoints.dynamicRestorePassToken];
		const result = await this.userService.updatePassword({
			restorePasswordToken,
			password: req.body.password,
		});

		res.status(200).json(result);
	}
}

const userController = new UserController(new UserService());
export default userController;
