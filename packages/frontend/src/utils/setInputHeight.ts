import { FormTypes } from '~/constants';

const setInputHeight = (formType: FormTypes | undefined): number => {
	const types = { auth: 60 };

	return types[formType] ?? 40;
};

export default setInputHeight;
