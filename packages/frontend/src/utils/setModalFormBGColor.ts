import { FormTypes, theme } from '~/constants';

const setModalFormBGColor = (formType: FormTypes | undefined): string => {
	const types = { authForm: theme.colors.authFormBGColor };

	return types[formType] ?? 'transparent';
};

export default setModalFormBGColor;
