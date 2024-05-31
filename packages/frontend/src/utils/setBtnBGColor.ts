import { IconBtnTypes, theme } from '~/constants';

const setBtnBGColor = (iconBtnType: IconBtnTypes): string => {
	const { colors } = theme;

	const types = {
		accept: theme.colors.greenBtn,
		reset: theme.colors.redBtn,
		delete: theme.colors.redBtn,
		deleteTransparent: 'transparent',
		edit: theme.colors.blueBtn,
		signOut: theme.colors.redBtn,
	};

	return types[iconBtnType] ?? colors.lightgrey;
};

export default setBtnBGColor;
