import { Messages } from '~/constants';

const getPassFieldError = (type: string): string => {
	const types = {
		required: Messages.passReqErr,
		minLength: Messages.passMinLengthErr,
		maxLength: Messages.passMaxLengthErr,
	};

	return types[type];
};

export default getPassFieldError;
