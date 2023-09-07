import React, { useState, useEffect } from 'react';

import './GlitchingText.css';

function GlitchingText(props) {
	// eslint-disable-next-line
	const [text, setText] = useState(props.text);
	// eslint-disable-next-line
	const [dataValue, setDataValue] = useState(props.dataValue);
	// eslint-disable-next-line
	const [className, setClassName] = useState(`${props.className} glitching-text`);

	useEffect(() => {
		const letters = "0123456789ABCDEFGHIJKLMNOØPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?/.,'";

		let interval = null;

		let title1 = document.querySelector('.title1');
		let title2 = document.querySelector('.title2');
		let title3 = document.querySelector('.title3');

		const lettersEffect = (element, duration) => {
			let iteration = 0;

			clearInterval(interval);

			interval = setInterval(() => {
				element.innerText = element.innerText
					.split('')
					// @ts-ignore
					.map((letter, index) => {
						if (index < iteration) {
							return element.dataset.value[index];
						}

						return letters[Math.floor(Math.random() * letters.length)];
					})
					.join('');
				if (iteration >= element.dataset.value.length) {
					clearInterval(interval);
				}
				iteration += 1 / 3;
			}, duration);
		};

		// We wait 1 second before starting the subtitle effect
		if (title1) {
			setTimeout(() => {
				lettersEffect(title1, 20);
			}, 2000);
		}
		if (title3) {
			setTimeout(() => {
				lettersEffect(title3, 20);
			}, 4600);
		}
		if (title2) {
			setTimeout(() => {
				lettersEffect(title2, 10);
			}, 4100);
		}
	}, []);

	return (
		<props.tags className={className} data-value={dataValue}>
			{text}
		</props.tags>
	);
}

export default GlitchingText;
