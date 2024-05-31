import { FieldErrors } from 'react-hook-form';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { INewPassword } from '~typings/auth.types';

const showRepeatPassError = (errors: FieldErrors<INewPassword>): void => {
	errors.passwordRepeat && toasts.errorToast(Messages.passRepeatErr);
};

export default showRepeatPassError;
