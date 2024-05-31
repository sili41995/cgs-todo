import { SetState } from '~typings/auth.types';
import { ISetStateProps } from '~typings/auth.types';

const setState =
	<T>({ set, name }: ISetStateProps<T>): SetState<T> =>
	(data) => {
		set(data, false, name);
	};

export default setState;
