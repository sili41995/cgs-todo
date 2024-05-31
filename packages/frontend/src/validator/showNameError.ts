import { FieldErrors } from 'react-hook-form';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { Name } from '~typings/auth.types';

const showNameError = (errors: FieldErrors<Name>): void => {
	errors.name && toasts.errorToast(Messages.nameReqErr);
};

export default showNameError;
