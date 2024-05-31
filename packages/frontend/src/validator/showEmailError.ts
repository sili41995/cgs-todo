import { FieldErrors } from 'react-hook-form';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { Email } from '~typings/auth.types';

const showEmailError = (errors: FieldErrors<Email>): void => {
	errors.email &&
		toasts.errorToast(
			errors.email.type === 'required'
				? Messages.emailReqErr
				: Messages.emailRegExpErr,
		);
};

export default showEmailError;
