import { Endpoints } from '@/constants';
import { IFindAllTodosProps } from '@/types/todos.type';
import { SavedUser } from '@/types/user.type';
import QueryString from 'qs';

const getFindFilters = ({
	user,
	query,
}: {
	user: SavedUser;
	query: QueryString.ParsedQs;
}): IFindAllTodosProps => {
	const owner = user.id;
	const searchQuery = query[Endpoints.dynamicSearch];
	const pageQuery = query[Endpoints.dynamicPage];
	const limitQuery = query[Endpoints.dynamicLimit];
	const statusQuery = query[Endpoints.dynamicStatus];
	const title = searchQuery ? String(searchQuery) : undefined;
	const complete = statusQuery === 'completed' ? true : undefined;
	const take = limitQuery ? Number(limitQuery) : 10;
	const skip = pageQuery ? (Number(pageQuery) - 1) * take : 0;

	return {
		owner,
		title,
		complete,
		skip,
		take,
	};
};

export default getFindFilters;
