import { useSwiper } from 'swiper/react';
import { IUseSlider } from '~typings/auth.types';
import usePaginationBar from './usePaginationBar';

const useSlider = (): IUseSlider => {
	const { setPage, currentPage, isLastPage } = usePaginationBar();
	const swiper = useSwiper();

	const onPrevBtnClick = (): void => {
		swiper.slidePrev();
	};

	const onNextBtnClick = (): void => {
		if (swiper.isEnd && !isLastPage) {
			swiper.slideTo(0);
			setPage({ e: null, page: currentPage + 1 });
		}

		swiper.slideNext();
	};

	return { onPrevBtnClick, onNextBtnClick };
};

export default useSlider;
