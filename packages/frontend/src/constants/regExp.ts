import { IRegExp } from '~typings/auth.types';

const regExp: IRegExp = {
	email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
};

export default regExp;
