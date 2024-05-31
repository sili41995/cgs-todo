const getTokenFromLS = (): string | null => {
	const token = localStorage.getItem('token');
	return token ? JSON.parse(token) : null;
};

export default getTokenFromLS;
