import React, { FC } from 'react';
import { Container } from './modalForm.styles';
import { IProps } from './modalForm.types';

const ModalForm: FC<IProps> = ({ children, formType }) => (
	<Container formType={formType}>{children}</Container>
);

export default ModalForm;
