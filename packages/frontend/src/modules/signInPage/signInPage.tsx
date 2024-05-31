import React, { FC } from 'react';
import { FormTypes } from '~/constants';
import ModalForm from '~shared/components/modalForm';
import SignInForm from '~shared/components/signInForm';

const SignInPage: FC = () => (
	<ModalForm formType={FormTypes.authForm}>
		<SignInForm />
	</ModalForm>
);

export default SignInPage;
