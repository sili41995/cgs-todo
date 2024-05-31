import styled from '@emotion/styled';
import { IStyledProps } from './modalForm.types';
import {
	setModalFormBGColor,
	setModalFormBorderRadius,
	setModalFormBoxShadow,
	setModalFormMargin,
	setModalFormPadding,
	setModalFormWidth,
} from '~/utils';

export const Container = styled.div<IStyledProps>`
	display: flex;
	width: 100%;
	max-width: ${({ formType }): string => setModalFormWidth(formType)};
	flex-direction: column;
	gap: ${({ theme }): string => theme.spacing(5)};
	padding: ${({ formType }): number => setModalFormPadding(formType)}px;
	background-color: ${({ formType }): string => setModalFormBGColor(formType)};
	border-radius: ${({ formType }): number =>
		setModalFormBorderRadius(formType)}px;
	box-shadow: ${({ formType }): string => setModalFormBoxShadow(formType)};
	margin: ${({ formType }): string => setModalFormMargin(formType)};
`;
