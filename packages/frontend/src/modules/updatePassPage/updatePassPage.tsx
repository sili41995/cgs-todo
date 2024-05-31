import React, { FC } from 'react';
import { FormTypes } from '~/constants';
import ModalForm from '~shared/components/modalForm';
import UpdatePassForm from '~shared/components/updatePassForm';

const UpdatePassPage: FC = () => (
	<ModalForm formType={FormTypes.authForm}>
		<UpdatePassForm />
	</ModalForm>
);

export default UpdatePassPage;
