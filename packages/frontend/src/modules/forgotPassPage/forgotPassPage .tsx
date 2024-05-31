import React, { FC } from 'react';
import { FormTypes } from '~/constants';
import ForgotPassForm from '~shared/components/forgotPassForm';
import ModalForm from '~shared/components/modalForm';

const ForgotPassPage: FC = () => (
	<ModalForm formType={FormTypes.authForm}>
		<ForgotPassForm />
	</ModalForm>
);

export default ForgotPassPage;
