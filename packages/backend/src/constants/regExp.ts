import { IRegExp } from '@/types/user.type';

const regExp: IRegExp = {
	email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
	notEmptyValue: /\S/,
};

export default regExp;
