const getPageNumbers = (pageQuantity: number): number[] => {
	const numbers = [];

	for (let i = 1; i <= pageQuantity; i += 1) {
		numbers.push(i);
	}

	return numbers;
};

export default getPageNumbers;
