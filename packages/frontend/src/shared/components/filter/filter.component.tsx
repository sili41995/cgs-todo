import React, { FC } from 'react';
import { FaRegCheckCircle, FaSistrix, FaRegCircle } from 'react-icons/fa';
import { AriaLabels, IconBtnTypes, IconSizes, InputTypes } from '~/constants';
import { useFilter } from '~/hooks';
import IconButton from '~shared/components/iconButton';
import Input from '~shared/components/input';
import { FilterContainer, ButtonsList, Item } from './filter.styles';

const Filter: FC = () => {
	const {
		onFilterChange,
		isCompletedStatus,
		showFilter,
		filter,
		onFilterBtnClick,
		onSortBtnClick,
	} = useFilter();
	const statusBtnIcon = isCompletedStatus ? (
		<FaRegCircle size={IconSizes.secondary} />
	) : (
		<FaRegCheckCircle size={IconSizes.secondary} />
	);

	return (
		<FilterContainer>
			{showFilter && (
				<Input
					type={InputTypes.text}
					defaultValue={filter}
					onChange={onFilterChange}
					autoFocus
				/>
			)}
			<ButtonsList>
				<Item>
					<IconButton
						ariaLabel={AriaLabels.filter}
						iconBtnType={IconBtnTypes.filter}
						onClick={onFilterBtnClick}
						icon={<FaSistrix size={IconSizes.secondary} />}
					/>
				</Item>
				<Item>
					<IconButton
						iconBtnType={IconBtnTypes.filter}
						onClick={onSortBtnClick}
						ariaLabel={AriaLabels.status}
						icon={statusBtnIcon}
					/>
				</Item>
			</ButtonsList>
		</FilterContainer>
	);
};

export default Filter;
