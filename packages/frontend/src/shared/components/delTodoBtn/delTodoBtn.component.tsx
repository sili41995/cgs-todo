import React, { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { AriaLabels, IconSizes } from '~/constants';
import IconButton from '~shared/components/iconButton';
import { IProps } from './delTodoBtn.types';

const DelTodoBtn: FC<IProps> = ({ onClick, iconBtnType, disabled }) => (
	<IconButton
		iconBtnType={iconBtnType}
		onClick={onClick}
		ariaLabel={AriaLabels.delete}
		icon={<AiOutlineDelete size={IconSizes.secondary} />}
		disabled={disabled}
	/>
);

export default DelTodoBtn;
