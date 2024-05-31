import { validatorWrap } from '~/utils';
import showTitleError from './showTitleError';
import showDescError from './showDescError';
import showDateError from './showDateError';
import { FieldErrors } from 'react-hook-form';
import { NewTodo } from '~typings/todos.types';

const validateAddTodoForm = (errors: FieldErrors<NewTodo>): void => {
	showTitleError(errors);
	showDescError(errors);
	showDateError(errors);
};

export default validatorWrap(validateAddTodoForm);
