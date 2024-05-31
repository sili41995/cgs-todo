import { FieldErrors } from 'react-hook-form';
import { validatorWrap } from '~/utils';
import { Email } from '~typings/auth.types';
import showEmailError from './showEmailError';

const validateForgotPassForm = (errors: FieldErrors<Email>): void => {
	showEmailError(errors);
};

export default validatorWrap(validateForgotPassForm);
