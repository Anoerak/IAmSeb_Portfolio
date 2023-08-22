import { useState, useEffect } from 'react';

const useNASAAPI = () => {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://api.nasa.gov/insight_weather/?api_key=LUobkkndGH6GTGgv5oJi1NpbeoaCq7vFFGZ4UMMY&feedtype=json&ver=1.0')
			.then((response) => response.json())
			.then((data) => {
				setWeather(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	return { weather, loading, error };
};

export default useNASAAPI;
