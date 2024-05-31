import { FormTypes, theme } from '~/constants';

const setModalFormBoxShadow = (formType: FormTypes | undefined): string => {
	const types = { authForm: theme.shadows.secondary };

	return types[formType] ?? '';
};

export default setModalFormBoxShadow;
