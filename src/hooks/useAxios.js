//import axios from 'axios';
//import { useEffect, useState } from 'react';

//axios.defaults.baseURL = 'https://opentdb.com/';

//export const useAxios = ({ url }) => {
//	const [response, setResponse] = useState(null);
//	const [error, setError] = useState('');
//	const [isLoading, setIsLoading] = useState(true);

//	useEffect(() => {
//		const fetchData = () => {
//			axios
//				.get(url)
//				.then(res => setResponse(res.data))
//				.catch(err => setError(err))
//				.finally(() => {
//					setIsLoading(false);
//				});
//		};
//		fetchData();
//	}, [url]);

//	return { response, error, isLoading };
//};

import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://opentdb.com/';

export const useAxios = ({ url }) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);
				setResponse(res.data);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { response, error, isLoading };
};
