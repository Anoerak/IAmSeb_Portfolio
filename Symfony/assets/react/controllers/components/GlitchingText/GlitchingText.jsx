import React, { useState, useEffect } from 'react';

import './GlitchingText.css';

function GlitchingText(props) {
	const [text, setText] = useState(props.text);
	const [dataValue, setDataValue] = useState(props.dataValue);
	const [classValue, setClassValue] = useState(`${props.classValue} glitching-text`);

	useEffect(() => {
		const letters = "0123456789ABCDEFGHIJKLMNOØPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?/.,'";

		let interval = null;

		let title1 = document.querySelector('.title1');
		let title2 = document.querySelector('.title2');

		const lettersEffect = (element, duration) => {
			let iteration = 0;

			clearInterval(interval);

			interval = setInterval(() => {
				element.innerText = element.innerText
					.split('')
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
			}, 1500);
		}
		if (title2) {
			setTimeout(() => {
				lettersEffect(title2, 40);
			}, 4000);
		}
	}, []);

	return (
		<props.tags class={classValue} data-value={dataValue}>
			{text}
		</props.tags>
	);
}

export default GlitchingText;
