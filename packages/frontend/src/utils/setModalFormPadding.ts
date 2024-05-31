import { FormTypes, theme } from '~/constants';

const setModalFormPadding = (formType: FormTypes | undefined): number => {
	const types = { authForm: theme.padding.authForm };

	return types[formType] ?? 0;
};

export default setModalFormPadding;
