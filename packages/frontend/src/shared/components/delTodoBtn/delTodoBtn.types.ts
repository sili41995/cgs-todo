import { IconBtnTypes } from '~/constants';
import { BtnClickEvent } from '~typings/auth.types';

export interface IProps {
	onClick: (e: BtnClickEvent) => void;
	iconBtnType: IconBtnTypes;
	disabled?: boolean;
}
