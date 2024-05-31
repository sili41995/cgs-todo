import { theme, FormTypes } from '~/constants';

const setInputFontSize = (formType: FormTypes | undefined): number => {
	const { fontSize } = theme;

	const types = { auth: fontSize.secondary };

	return types[formType] ?? fontSize.primary;
};

export default setInputFontSize;
