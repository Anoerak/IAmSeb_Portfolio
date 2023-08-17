// We're gonna use this hook to set the dark mode

import { useState, useEffect } from 'react';

export const useContextDarkMode = () => {
	const [theme, setTheme] = useState('light');
	const [componentMounted, setComponentMounted] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		const toggler = document.querySelector('.toggler');
		const circle = document.querySelector('.circle');
		if (theme === 'light') {
			setMode('dark');
			document.body.classList.add('dark');
			toggler.classList.toggle('clicked');
			circle.classList.toggle('dark');
		} else {
			setMode('light');
			document.body.classList.remove('dark');
			toggler.classList.toggle('clicked');
			circle.classList.toggle('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		if (localTheme) {
			setTheme(localTheme);
		} else {
			setMode('light');
		}
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
};
