import { SubmitHandler } from 'react-hook-form';
import toasts from './toasts';

const handleFormSubmitWrap = <T>(handleFormSubmit: SubmitHandler<T>) => {
	return async (data: T): Promise<void> => {
		try {
			await handleFormSubmit(data);
		} catch (error) {
			if (error instanceof Error) {
				toasts.errorToast(error.message);
			}
		}
	};
};

export default handleFormSubmitWrap;
