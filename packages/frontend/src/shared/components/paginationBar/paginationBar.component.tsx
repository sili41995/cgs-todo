import React, { FC } from 'react';
import { IProps } from './paginationBar.types';
import { usePaginationBar } from '~/hooks';
import { AriaLabels } from '~/constants';
import { BtnClickEvent } from '~typings/auth.types';
import { Button, Item, List, TemplateItem } from './paginationBar.styles';

const PaginationBar: FC<IProps> = () => {
	const {
		isBackNavBtnDisable,
		onPrevPageBtnClick,
		isShowFirstPageBtn,
		onFirstPageBtnClick,
		firstPage,
		isShowPrevTemplateBtn,
		isValidPage,
		pageNumbers,
		currentPage,
		setPage,
		isShowNextTemplateBtn,
		isShowLastPageBtn,
		onLastPageBtnClick,
		lastPage,
		isNextNavBtnDisable,
		onNextPageBtnClick,
		step,
	} = usePaginationBar();

	return (
		<List>
			<Item>
				<Button disabled={isBackNavBtnDisable} onClick={onPrevPageBtnClick}>
					{'<< Previous'}
				</Button>
			</Item>
			{isShowFirstPageBtn && (
				<Item>
					<Button onClick={onFirstPageBtnClick}>{firstPage}</Button>
				</Item>
			)}
			{isShowPrevTemplateBtn && (
				<TemplateItem>
					<Button disabled>...</Button>
				</TemplateItem>
			)}
			{isValidPage &&
				pageNumbers.map((number) => {
					const onTargetPageBtnClick = (e: BtnClickEvent): void => {
						setPage({ e, page: number });
					};

					return (
						<Item
							key={number}
							page={number}
							currentPage={currentPage}
							step={step}
						>
							<Button
								className={number === currentPage ? 'active' : ''}
								aria-label={`${AriaLabels.pageBtn} ${number}`}
								onClick={onTargetPageBtnClick}
							>
								{number}
							</Button>
						</Item>
					);
				})}
			{isShowNextTemplateBtn && (
				<TemplateItem>
					<Button disabled>...</Button>
				</TemplateItem>
			)}
			{isShowLastPageBtn && (
				<Item>
					<Button onClick={onLastPageBtnClick}>{lastPage}</Button>
				</Item>
			)}
			<Item>
				<Button disabled={isNextNavBtnDisable} onClick={onNextPageBtnClick}>
					{'Next >>'}
				</Button>
			</Item>
		</List>
	);
};

export default PaginationBar;
