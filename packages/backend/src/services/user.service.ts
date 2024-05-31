import { prisma } from '@/app';
import { ErrorMessages, ProfileSettings } from '@/constants';
import {
	Credentials,
	UpdatePasswordProps,
	LoginRes,
	LogoutRes,
	NewUser,
	RegisterRes,
	RestorePasswordRes,
	SavedUser,
	UserEmail,
	IDecodedToken,
	SuccessUserRes,
} from '@/types/user.type';
import { generateToken, httpError } from '@/utils';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

const { SECRET_KEY } = process.env;

class UserService {
	async register(data: NewUser): Promise<RegisterRes> {
		const { email, password } = data;
		const user = await prisma.user.findUnique({ where: { email } });

		if (user) {
			throw httpError({
				status: 409,
				message: ErrorMessages.duplicateEmailErr,
			});
		}

		const hashPassword = await bcrypt.hash(password, 10);
		const result = await prisma.user.create({
			data: { ...data, password: hashPassword },
		});

		if (!SECRET_KEY) {
			throw httpError({ status: 400 });
		}

		const verifyToken = generateToken({
			expiresIn: String(ProfileSettings.otherTokenExpiresIn),
			secretKey: SECRET_KEY,
			id: result.id,
		});
		const updatedUser = await prisma.user.update({
			where: { email: result.email },
			data: { verifyToken },
			select: { id: true, email: true, name: true, verifyToken: true },
		});

		return updatedUser;
	}

	async login({ email, password }: Credentials): Promise<LoginRes> {
		const user = await prisma.user.findUnique({ where: { email } });
		const isValidPassword = await bcrypt.compare(
			password as string,
			user?.password ?? '',
		);

		if (!user || !user.isVerify || !isValidPassword) {
			throw httpError({
				status: 401,
				message: ErrorMessages.incorrectCredentialsErr,
			});
		}

		if (!SECRET_KEY) {
			throw httpError({ status: 400 });
		}

		const token = generateToken({
			expiresIn: String(ProfileSettings.accessTokenExpiresIn),
			secretKey: SECRET_KEY,
			id: user.id,
		});

		const result = await prisma.user.update({
			where: { email },
			data: { token },
			select: { id: true, email: true, token: true, name: true },
		});

		return result;
	}

	async logout({ email }: SavedUser): Promise<LogoutRes> {
		const result = await prisma.user.update({
			where: { email },
			data: { token: null },
			select: { id: true },
		});

		return result;
	}

	async restorePassword({ email }: UserEmail): Promise<RestorePasswordRes> {
		const user = await prisma.user.findUnique({ where: { email } });

		if (!user) {
			throw httpError({ status: 404 });
		}

		if (!SECRET_KEY) {
			throw httpError({ status: 400 });
		}

		const restorePasswordToken = generateToken({
			expiresIn: String(ProfileSettings.otherTokenExpiresIn),
			id: user.id,
			secretKey: SECRET_KEY,
		});

		const result = await prisma.user.update({
			where: { email },
			data: { restorePasswordToken, token: null },
			select: { id: true, email: true, name: true, restorePasswordToken: true },
		});

		return result;
	}

	async updatePassword({
		password,
		restorePasswordToken,
	}: UpdatePasswordProps): Promise<SuccessUserRes> {
		if (!restorePasswordToken) {
			throw httpError({ status: 400 });
		}

		const { id } = jwt.verify(
			restorePasswordToken,
			SECRET_KEY as Secret,
		) as IDecodedToken;

		const hashPassword = await bcrypt.hash(password, 10);
		const result = await prisma.user.update({
			where: { id },
			data: { password: hashPassword, restorePasswordToken: null },
			select: { email: true, id: true, name: true },
		});

		return result;
	}
}

export default UserService;
