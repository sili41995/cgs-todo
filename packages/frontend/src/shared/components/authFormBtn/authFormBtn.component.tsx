import React, { FC } from 'react';
import { Button } from './authFormBtn.styles';
import { IProps } from './authFormBtn.types';
import { AriaLabels, BtnTypes } from '~/constants';
import Loader from '~shared/components/loader';

const AuthFormBtn: FC<IProps> = ({ title, disabled }) => (
	<Button
		disabled={disabled}
		type={BtnTypes.submit}
		aria-label={AriaLabels.authBtn}
	>
		{disabled ? <Loader /> : title}
	</Button>
);

export default AuthFormBtn;
