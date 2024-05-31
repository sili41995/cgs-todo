import { ISetBtnDisplayProps } from '~typings/todos.types';

const setBtnDisplayProp = ({
	currentPage,
	page,
	step,
}: ISetBtnDisplayProps): string | undefined => {
	if (currentPage && page) {
		return page - Number(step) > currentPage ||
			page + Number(step) < currentPage
			? 'none'
			: 'block';
	}
};

export default setBtnDisplayProp;
