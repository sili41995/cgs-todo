import express, { Express, Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import logger from 'morgan';
import AppRouter from '@/routes';
import { IHttpError } from '@/types/todos.type';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
export const prisma = new PrismaClient();

app.use(cors());
app.use(logger(formatsLogger));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

router.init();

app.use((_: Request, res: Response): void => {
	res.status(404).json({ message: 'Not Found' });
});

app.use(
	(err: IHttpError, req: Request, res: Response, _: NextFunction): void => {
		res.status(err.status || 500).json({ message: err.message });
	},
);

prisma
	.$connect()
	.then(() => {
		app.listen(port, () => {
			console.log(`Now listening on port ${port}`);
		});
	})
	.catch(() => {
		prisma.$disconnect();
	});
