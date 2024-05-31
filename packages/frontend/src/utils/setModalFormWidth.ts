import { FormTypes } from '~/constants';

const setModalFormWidth = (formType: FormTypes | undefined): string => {
	const types = { authForm: '600px' };

	return types[formType] ?? '100%';
};

export default setModalFormWidth;
