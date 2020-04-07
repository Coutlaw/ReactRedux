import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID l7dcR04kK52Au8y_ozrIu3pSN7V1RFkknX61Wi_ee78'
	}
});
