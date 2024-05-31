import { BtnClickEvent } from '~typings/auth.types';

export interface IProps {
	onAcceptBtnClick: (e: BtnClickEvent) => void;
	onResetBtnClick: (e: BtnClickEvent) => void;
	disabled: boolean;
}
