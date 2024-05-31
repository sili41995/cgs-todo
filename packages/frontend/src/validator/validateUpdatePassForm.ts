import { validatorWrap } from '~/utils';
import showRepeatPassError from './showRepeatPassError';
import showPassError from './showPassError';
import { FieldErrors } from 'react-hook-form';
import { INewPassword } from '~typings/auth.types';

const validateUpdatePassForm = (errors: FieldErrors<INewPassword>): void => {
	showPassError(errors);
	showRepeatPassError(errors);
};

export default validatorWrap(validateUpdatePassForm);
