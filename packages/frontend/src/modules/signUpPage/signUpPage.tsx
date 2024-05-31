import React, { FC } from 'react';
import { FormTypes } from '~/constants';
import ModalForm from '~shared/components/modalForm';
import SignUpForm from '~shared/components/signUpForm';

const SignUpPage: FC = () => (
	<ModalForm formType={FormTypes.authForm}>
		<SignUpForm />
	</ModalForm>
);

export default SignUpPage;
