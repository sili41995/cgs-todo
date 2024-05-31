import { FormTypes, theme } from '~/constants';

const setModalFormBorderRadius = (formType: FormTypes | undefined): number => {
	const types = { authForm: theme.borderRadius.other };

	return types[formType] ?? 0;
};

export default setModalFormBorderRadius;
