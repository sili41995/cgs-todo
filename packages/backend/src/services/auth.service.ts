import { prisma } from '@/app';
import { ErrorMessages } from '@/constants';
import { IDecodedToken, SuccessUserRes } from '@/types/user.type';
import { httpError } from '@/utils';
import jwt, { Secret } from 'jsonwebtoken';

const { SECRET_KEY } = process.env;

class AuthService {
	async verifyEmail(verifyToken: string): Promise<SuccessUserRes | undefined> {
		const { id } = jwt.verify(
			verifyToken,
			SECRET_KEY as Secret,
		) as IDecodedToken;

		const result = await prisma.user.findUnique({ where: { id } });

		if (!result || !result.verifyToken) {
			throw httpError({ status: 404, message: ErrorMessages.userNotFound });
		}

		const verifyUser = await prisma.user.update({
			where: { email: result.email },
			data: { verifyToken: null, isVerify: true },
			select: { email: true, id: true, name: true },
		});

		return verifyUser;
	}
}

export default AuthService;
