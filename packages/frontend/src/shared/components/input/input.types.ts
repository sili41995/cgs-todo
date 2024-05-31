import { InputTypes, FormTypes } from '~/constants';
import { InputChangeEvent } from '~typings/auth.types';

export interface IProps {
	type: InputTypes;
	formType?: FormTypes;
	settings?: object;
	placeholder?: string;
	label?: string;
	defaultValue?: string;
	autoFocus?: boolean;
	onChange?: (e: InputChangeEvent) => void;
}

export interface IStyledProps {
	formType?: FormTypes;
}
