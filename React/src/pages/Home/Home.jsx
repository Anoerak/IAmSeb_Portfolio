import React, { useEffect } from 'react';
import Terminal from '../../components/Terminal/Terminal';
import Card from '../../components/Card/Card';

import './Home.css';

function Home() {
	useEffect(() => {
		// We set up the page title
		document.title = 'I Am Seb w/ React';
		// Dark Mode Checkbox Listener
		document.querySelector('#toggle_input').addEventListener('change', (e) => {
			if (e.target.checked) {
				document.body.classList.add('dark');
			} else {
				document.body.classList.remove('dark');
			}
		});
	}, []);

	return (
		<section>
			<h2>Dark mode toggle</h2>

			<div className='toggle__container'>
				<input type='checkbox' id='toggle_input' className='toggle__input' />
				<label htmlFor='toggle__input' className='toggle__label'>
					<span className='toggle__label__text'>Dark mode</span>
					<span className='toggle__label__icon'></span>
				</label>
				<div className='toggle__background'></div>
			</div>

			<div className='empty__space'>
				<Terminal />
			</div>
		</section>
	);
}

export default Home;
