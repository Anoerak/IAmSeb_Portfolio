import React, { useState, useEffect } from 'react';

import './TypeWriter.css';

const TypeWriter = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const text = Object.values(props);
		text.forEach((value) => {
			let i = {
				text: value,
			};
			setData((text) => [...text, i]);
		});

		if ((window.innerWidth > 768 && window.innerWidth < window.innerHeight) || window.innerWidth > window.innerHeight) {
			window.addEventListener('scroll', () => {
				const container = document.querySelector('.TypeWriter');
				const lines = document.querySelectorAll('.line__selector');
				let delay = 1;

				if (window.scrollY > container.offsetTop - window.innerHeight / 2) {
					lines.forEach((line) => {
						line.style.animation = `animated-text__${
							line.classList[0].split('__')[1]
						} 4s steps(87, end) ${delay}s 1 normal both, animated-cursor__${
							line.classList[0].split('__')[1]
						} 500ms steps(87, end) ${delay}s 5`;
						delay += 4;
					});
				}
			});
		}
	}, [props]);

	console.log(data);

	return (
		<div className='TypeWriter'>
			{data.map((item, index) => {
				return (
					<p key={index} className={`line__${index + 1} line__selector`}>
						{item.text}
					</p>
				);
			})}
		</div>
	);
};

export default TypeWriter;
