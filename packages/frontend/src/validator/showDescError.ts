import { FieldErrors } from 'react-hook-form';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { Description } from '~typings/todos.types';

const showDescError = (errors: FieldErrors<Description>): void => {
	errors.description && toasts.errorToast(Messages.descriptionReqErr);
};

export default showDescError;
