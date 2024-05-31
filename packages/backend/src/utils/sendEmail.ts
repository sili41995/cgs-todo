import { ISendEmailProps } from '@/types/user.type';
import {
	Configuration,
	EmailsApi,
	EmailTransactionalMessageData,
} from '@elasticemail/elasticemail-client-ts-axios';
const { ELASTIC_EMAIL_EMAIL_FROM, ELASTIC_EMAIL_API_KEY, FRONTEND_BASE_URL } =
	process.env;

const config = new Configuration({
	apiKey: ELASTIC_EMAIL_API_KEY,
});

const emailsApi = new EmailsApi(config);

const sendEmail = ({
	userEmail,
	token,
	path,
	title,
}: ISendEmailProps): void => {
	console.log(userEmail);
	const email: EmailTransactionalMessageData = {
		Recipients: {
			To: [userEmail],
		},
		Content: {
			Body: [
				{
					ContentType: 'HTML',
					Charset: 'utf-8',
					Content: `<a target='_blank' href='${FRONTEND_BASE_URL}/${path}/${token}/'>${title}</a>`,
				},
			],
			From: ELASTIC_EMAIL_EMAIL_FROM,
			Subject: title,
		},
	};

	const sendTransactionalEmails = (
		email: EmailTransactionalMessageData,
	): void => {
		emailsApi
			.emailsTransactionalPost(email)
			.then(() => {
				console.log('API called successfully.');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	sendTransactionalEmails(email);
};

export default sendEmail;
