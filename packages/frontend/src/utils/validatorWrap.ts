import { FieldErrors } from 'react-hook-form';
import toasts from './toasts';

const validatorWrap = <T>(validator: (errors: FieldErrors<T>) => void) => {
	return (errors: FieldErrors<T>): void => {
		try {
			validator(errors);
		} catch (error) {
			if (error instanceof Error) {
				toasts.errorToast(error.message);
			}
		}
	};
};

export default validatorWrap;
