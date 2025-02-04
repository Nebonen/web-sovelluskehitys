import { fetchData } from './fetch';

const getItems = async () => {
	const url = 'http://localhost:3000/api/items';
	const items = await fetchData(url);

	if (items.error) {
		console.error('getItems() error:', items.error);
		return;
	}

	console.log('getItems() response:', items);
};

export { getItems };
