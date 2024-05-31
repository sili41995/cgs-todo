import { FieldErrors } from 'react-hook-form';
import { Messages } from '~/constants';
import { toasts } from '~/utils';
import { Title } from '~typings/todos.types';

const showTitleError = (errors: FieldErrors<Title>): void => {
	errors.title && toasts.errorToast(Messages.titleReqErr);
};

export default showTitleError;
