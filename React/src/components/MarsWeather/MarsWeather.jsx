import React from 'react';

import useNASAAPI from '@Services/NASAAPI';

import './MarsWeather.css';

function MarsWeather() {
	const { weather, loading, error } = useNASAAPI();

	console.log(weather);
	console.log(loading);
	console.log(error);

	return (
		<div className='MarsWeather'>
			<h1>Mars Weather</h1>
			<p>Weather on Mars is provided by InSight rover.</p>
			<p>It is updated every hour.</p>
			<p>Here is the latest weather report from Mars:</p>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
					<p>Season: {weather.season}</p>
					<p>Atmospheric Pressure: {weather.atmo_opacity}</p>
					<p>Wind Direction: {weather.wind_direction}</p>
					<p>Wind Speed: {weather.wind_speed}</p>
					<p>Temperature: {weather.temperature}</p>
					<p>Pressure: {weather.pressure}</p>
					<p>First UTC: {weather.first_utc}</p>
					<p>Last UTC: {weather.last_utc}</p>
				</div>
			)}
		</div>
	);
}

export default MarsWeather;
