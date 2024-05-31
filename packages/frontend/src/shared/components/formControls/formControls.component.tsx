import React, { FC } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { AriaLabels, BtnTypes, IconBtnTypes, IconSizes } from '~/constants';
import IconButton from '~shared/components/iconButton';
import { ButtonsList, ListItem } from './formControls.styles';
import { IProps } from './formControls.types';

const FormControls: FC<IProps> = ({
	onAcceptBtnClick,
	onResetBtnClick,
	disabled,
}) => (
	<ButtonsList>
		<ListItem>
			<IconButton
				iconBtnType={IconBtnTypes.accept}
				type={BtnTypes.submit}
				icon={<FaCheck size={IconSizes.secondary} />}
				ariaLabel={AriaLabels.accept}
				onClick={onAcceptBtnClick}
				disabled={disabled}
			/>
		</ListItem>
		<ListItem>
			<IconButton
				iconBtnType={IconBtnTypes.reset}
				icon={<FaTimes size={IconSizes.secondary} />}
				ariaLabel={AriaLabels.reset}
				onClick={onResetBtnClick}
				disabled={disabled}
			/>
		</ListItem>
	</ButtonsList>
);

export default FormControls;
