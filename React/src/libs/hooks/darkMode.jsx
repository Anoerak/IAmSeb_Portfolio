import React from 'react';

const setDark = () => {
	localStorage.setItem('theme', 'dark');
	document.body.classList.add('dark');
};

const setLight = () => {
	localStorage.setItem('theme', 'light');
	document.body.classList.remove('dark');
};

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);

if (defaultDark) {
	setDark();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
	if (e.matches) {
		setDark();
	} else {
		setLight();
	}
});

const toggleTheme = () => {
	if (localStorage.getItem('theme') === 'dark') {
		setLight();
	} else {
		setDark();
	}
};

const DarkMode = () => {
	return (
		<>
			<div className='toggler' onClick={toggleTheme}></div>
			<button className='circle'></button>
		</>
	);
};

export default DarkMode;
