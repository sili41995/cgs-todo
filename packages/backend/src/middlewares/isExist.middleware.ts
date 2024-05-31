import { Response, Request, NextFunction } from 'express';
import { httpError } from '@/utils';
import { Endpoints, ModelNames } from '@/constants';
import { prisma } from '@/app';

const isExist =
	(
		name: ModelNames,
	): ((req: Request, res: Response, next: NextFunction) => Promise<void>) =>
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const dynamicId = req.params[Endpoints.dynamicId];
		const id = Number(dynamicId);
		const result = await prisma[name].findFirst({ where: { id } });

		if (!result) {
			next(httpError({ status: 404 }));
		}

		next();
	};

export default isExist;
