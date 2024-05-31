import { GeneralParams, SearchParamsKeys } from '~/constants';
import { getPageNumbers, getPaginationBarSettings, makeBlur } from '~/utils';
import { BtnClickEvent } from '~typings/auth.types';
import useSetSearchParams from './useSetSearchParams';
import { IOnPageBtnClickProps, IUsePaginationBar } from '~typings/todos.types';
import { useTodosStore } from '~store/store';
import { selectCount } from '~store/todos/selectors';

const usePaginationBar = (): IUsePaginationBar => {
	const { updateSearchParams, searchParams } = useSetSearchParams();
	const count = useTodosStore(selectCount);
	const step = Number(GeneralParams.paginationStep);
	const quantity = Number(GeneralParams.todosLimit);
	const pageQuantity = Math.ceil(count / quantity);
	const pageNumbers = getPageNumbers(pageQuantity);
	const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
	const {
		firstPage,
		lastPage,
		isBackNavBtnDisable,
		isNextNavBtnDisable,
		isShowNextTemplateBtn,
		isShowLastPageBtn,
		isShowFirstPageBtn,
		isShowPrevTemplateBtn,
		isValidPage,
		isLastPage,
	} = getPaginationBarSettings({
		pageNumbers,
		currentPage,
		step,
	});

	const setPage = ({ e, page }: IOnPageBtnClickProps): void => {
		e && makeBlur(e.currentTarget);
		updateSearchParams({ key: SearchParamsKeys.page, value: String(page) });
	};

	const onPrevPageBtnClick = (e: BtnClickEvent): void => {
		setPage({ e, page: currentPage - 1 });
	};

	const onNextPageBtnClick = (e: BtnClickEvent): void => {
		setPage({ e, page: currentPage + 1 });
	};

	const onFirstPageBtnClick = (e: BtnClickEvent): void => {
		setPage({ e, page: firstPage });
	};

	const onLastPageBtnClick = (e: BtnClickEvent): void => {
		setPage({ e, page: lastPage });
	};

	return {
		isBackNavBtnDisable,
		onPrevPageBtnClick,
		isShowFirstPageBtn,
		firstPage,
		onFirstPageBtnClick,
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
		isLastPage,
	};
};

export default usePaginationBar;
