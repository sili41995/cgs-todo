import { Response, Request } from 'express';
import { Endpoints } from '@/constants';
import AuthService from '@/services/auth.service';

export class AuthController {
	constructor(private authService: AuthService) {
		this.authService = authService;
	}

	async verifyEmail(req: Request, res: Response): Promise<void> {
		const token = req.params[Endpoints.dynamicToken];
		const result = await this.authService.verifyEmail(token);
		res.status(200).json(result);
	}
}

const authController = new AuthController(new AuthService());

export default authController;
