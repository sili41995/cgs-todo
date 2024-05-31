import { ReactNode } from 'react';
import { InputTypes } from '~/constants';
import { InputChangeEvent } from '~typings/auth.types';

export interface IProps {
	checked: boolean;
	type: InputTypes;
	settings: object;
	label: string;
	altElem: ReactNode;
	onChange: (e: InputChangeEvent) => void;
}

export interface IStyledProps {
	checked: boolean;
}
