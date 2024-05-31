import { validatorWrap } from '~/utils';
import showEmailError from './showEmailError';
import showPassError from './showPassError';
import { Credentials } from '~typings/auth.types';
import { FieldErrors } from 'react-hook-form';

const validateSignInForm = (errors: FieldErrors<Credentials>): void => {
	showEmailError(errors);
	showPassError(errors);
};

export default validatorWrap(validateSignInForm);
