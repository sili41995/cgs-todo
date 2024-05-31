import { IconBtnTypes, theme } from '~/constants';

const setBtnIconColor = (iconBtnType: IconBtnTypes): string => {
	const { colors } = theme;

	const types = {
		accept: colors.greenIcon,
		reset: colors.redIcon,
		delete: colors.redIcon,
		deleteTransparent: colors.redIcon,
		edit: colors.primary,
		signOut: theme.colors.redIcon,
	};

	return types[iconBtnType] ?? colors.grey;
};

export default setBtnIconColor;
