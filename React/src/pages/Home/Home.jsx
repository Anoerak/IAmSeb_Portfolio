import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling
import Terminal from '../../components/Terminal/Terminal';
import Card from '../../components/Card/Card';
import IAmSeb from '../../components/IAmSeb/IAmSeb';
import pictureOfMe from '../../assets/img/portrait_me.webp';

import './Home.css';

function Home() {
	useEffect(() => {
		// We set up the page title
		document.title = 'I Am Seb w/ React';
	}, []);

	return (
		<>
			<section id='about-me'>
				<div className='left__container'>
					<h2>CREATIVE DEVELOPER</h2>
					<img src={pictureOfMe} alt='portrait of me' />
				</div>
				<div className='right__container'>
					<Link to='#coming-soon'>
						<div className='next__section__arrow'></div>
					</Link>
					<h2>SEBASTIEN P.</h2>
				</div>
			</section>
			<section id='coming-soon'>
				<h2>Coming Soon!!</h2>

				<IAmSeb />

				<p>
					Exciting news! My website is currently under construction and will be launching soon with a fresh new look and
					cutting-edge technology. Get ready for an awesome user experience with intuitive navigation and stunning visuals. Stay
					tuned for updates and be the first to experience my new online presence. I can’t wait to share it with you! 😊
				</p>

				<h3>Here is a teaser</h3>

				<p>Hover the card and find out what's gonna happen 😃</p>
				<div className='empty__space'>
					<Terminal>
						<Card />
					</Terminal>
				</div>
			</section>
		</>
	);
}

export default Home;
