import { ReactNode } from 'react';
import { LinkClickEvent } from '~typings/auth.types';

export interface IProps {
	children: ReactNode;
	to: string;
	state?: object;
	onClick?: (e: LinkClickEvent) => void;
}
