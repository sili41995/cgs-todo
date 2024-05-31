import { FieldErrors } from 'react-hook-form';
import { getPassFieldError, toasts } from '~/utils';
import { Password } from '~typings/auth.types';

const showPassError = (errors: FieldErrors<Password>): void => {
	errors.password && toasts.errorToast(getPassFieldError(errors.password.type));
};

export default showPassError;
