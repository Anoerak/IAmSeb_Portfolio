import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Video from '../../assets/videos/glitch_4K.mp4';

import './NotFound.css';

function NotFound() {
	useEffect(() => {
		const letters = "0123456789ABCDEFGHIJKLMNOØPQRSTUVWXYZabcdefghijklmnoøpqrestuvwxyz!@#$%^&*()_+{}|:<>?/.,'";

		let interval = null;

		const screen = document.querySelector('body'),
			title = document.querySelector('.title'),
			subtitle = document.querySelector('.subtitle'),
			message = document.querySelector('.message');

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

		screen.onload = () => {
			lettersEffect(title, 25);
			// We wait 1 second before starting the subtitle effect
			setTimeout(() => {
				lettersEffect(subtitle, 10);
			}, 250);
			// We wait 1 seconds before starting the message effect
			setTimeout(() => {
				lettersEffect(message, 5);
			}, 1450);
		};
	}, []);

	return (
		<>
			<video autoPlay loop id='background_video'>
				<source src={Video} type='video/mp4' />
			</video>

			<div id='content'>
				<div className='message__container'>
					<h1 className='title' data-value='404'>
						***
					</h1>
					<h2 className='subtitle' data-value="Oups, we can't find that page.">
						******************************
					</h2>
					<p className='message' data-value='Why not stepping back to our Home page and try again?'>
						******************************************************
					</p>
				</div>
				<div className='back__button'>
					<div className='button__border'></div>
					<Link className='button__content' to='/'>
						{' '}
						Go Back{' '}
					</Link>
				</div>
			</div>
		</>
	);
}

export default NotFound;
