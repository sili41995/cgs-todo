import { SearchParamsKeys, Statuses } from '~/constants';
import useSetSearchParams from './useSetSearchParams';
import { useEffect, useState } from 'react';
import {
	BtnClickEvent,
	IUseFilter,
	InputChangeEvent,
} from '~typings/auth.types';
import { makeBlur } from '~/utils';
import debounce from 'debounce';

const useFilter = (): IUseFilter => {
	const { searchParams, updateSearchParams } = useSetSearchParams();
	const filter = searchParams.get(SearchParamsKeys.search) ?? '';
	const [showFilter, setShowFilter] = useState<boolean>(() => Boolean(filter));
	const isCompletedStatus =
		searchParams.get(SearchParamsKeys.status) === Statuses.completed;

	useEffect(() => {
		if (!showFilter) {
			updateSearchParams({ key: SearchParamsKeys.search, value: '' });
		}
	}, [showFilter]);

	const onSortBtnClick = ({ currentTarget }: BtnClickEvent): void => {
		makeBlur(currentTarget);
		const value = isCompletedStatus ? '' : Statuses.completed;
		updateSearchParams({ key: SearchParamsKeys.status, value });
	};

	const onFilterChange = (e: InputChangeEvent): void => {
		const { value } = e.target;
		updateSearchParams({ key: SearchParamsKeys.search, value });
	};

	const onFilterBtnClick = (e: BtnClickEvent): void => {
		makeBlur(e.currentTarget);
		setShowFilter((showFilter) => !showFilter);
	};

	return {
		onFilterChange: debounce(onFilterChange, 300),
		isCompletedStatus,
		showFilter,
		filter,
		onFilterBtnClick,
		onSortBtnClick,
	};
};

export default useFilter;
