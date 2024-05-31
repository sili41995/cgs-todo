import { useEffect } from 'react';
import usePaginationBar from './usePaginationBar';
import { iOOptions } from '~/constants';
import { DOMElement } from '~typings/todos.types';

const useGetMoreTodos = (iOGuard: DOMElement): void => {
	const { setPage, currentPage, isLastPage } = usePaginationBar();

	useEffect(() => {
		const getMoreTodos = (entries: IntersectionObserverEntry[]): void => {
			entries.forEach((entry) => {
				const shouldUpdatePage = entry.isIntersecting && !isLastPage;

				if (shouldUpdatePage) {
					scrollTo({ top: 0 });
					setPage({ e: null, page: currentPage + 1 });
				}
			});
		};

		const observer = new IntersectionObserver(getMoreTodos, iOOptions);

		observer.observe(iOGuard.current);

		return () => {
			iOGuard.current && observer.unobserve(iOGuard.current);
		};
	}, [currentPage]);
};

export default useGetMoreTodos;
