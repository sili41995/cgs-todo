import { FieldErrors } from 'react-hook-form';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { DateField } from '~typings/todos.types';

const showDateError = (errors: FieldErrors<DateField>): void => {
	errors.date && toasts.errorToast(Messages.dateReqErr);
};

export default showDateError;
