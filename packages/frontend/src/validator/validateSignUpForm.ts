import { FieldErrors } from 'react-hook-form';
import showEmailError from './showEmailError';
import showNameError from './showNameError';
import showPassError from './showPassError';
import { NewUser } from '~typings/auth.types';
import { validatorWrap } from '~/utils';

const validateSignUpForm = (errors: FieldErrors<NewUser>): void => {
	showNameError(errors);
	showEmailError(errors);
	showPassError(errors);
};

export default validatorWrap(validateSignUpForm);
