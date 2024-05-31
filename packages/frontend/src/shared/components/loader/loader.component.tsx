import React, { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { theme } from '~/constants';

const Loader: FC = () => (
	<ThreeDots
		height="80"
		width="80"
		radius="9"
		color={theme.colors.lightgrey}
		ariaLabel="three-dots-loading"
		wrapperStyle={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexGrow: '1',
		}}
		visible={true}
	/>
);

export default Loader;
