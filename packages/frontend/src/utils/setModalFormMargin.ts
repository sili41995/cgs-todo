import { FormTypes, theme } from '~/constants';

const setModalFormMargin = (formType: FormTypes | undefined): string => {
	const types = { authForm: `${theme.spacing(10)} auto` };

	return types[formType] ?? '0';
};

export default setModalFormMargin;
