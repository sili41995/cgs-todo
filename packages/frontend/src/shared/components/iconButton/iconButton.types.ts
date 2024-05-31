import { ReactNode } from 'react';
import { AriaLabels, BtnTypes, IconBtnTypes } from '~/constants';
import { BtnClickEvent } from '~typings/auth.types';

export interface IProps {
	type?: BtnTypes;
	ariaLabel: AriaLabels;
	icon: ReactNode;
	iconBtnType: IconBtnTypes;
	title?: string;
	disabled?: boolean;
	onClick?: (e: BtnClickEvent) => void;
}

export interface IStyledProps {
	iconBtnType: IconBtnTypes;
}
