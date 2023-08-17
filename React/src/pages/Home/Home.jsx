import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling
import pictureOfMe from '@Images/portrait_me.webp';
import BlinkingWords from '@Components/BlinkingWords/BlinkingWords';
import Webdev from '@Logos/web_dev.png';
import HookedCode from '@Logos/hooked_code.png';
// import Terminal from '@Components/Terminal/Terminal';
// import Card from '@Components/Card/Card';
// import IAmSeb from '@Components/IAmSeb/IAmSeb';

import './Home.css';

function Home() {
	const frontStack = [
		'React',
		'HTML5',
		'',
		'',
		'JavaScript',
		'',
		'Styled Components',
		'',
		'Responsive Design',
		'',
		'Vue',
		'',
		'Material UI',
		'',
		'Redux',
		'',
		'CSS3',
	];

	const backStack = [
		'',
		'',
		'',
		'',
		'',
		'GitHub',
		'PHP',
		'Node.js',
		'',
		'MySQL',
		'Git',
		'Express',
		'',
		'Mongoose',
		'GitLab',
		'Twig',
		'',
		'',
		'PHPUnit',
		'Postman',
		'',
		'',
		'',
		'',
		'Symfony',
		'',
		'Composer',
		'JWT',
		'REST API',
		'MongoDB',
		'APIplatform',
	];

	const otherStack = ['Docker', '', 'MacOS', '', 'Windows', '', 'Apache', '', 'NGINX', '', '', 'Figma', 'Microsoft Suite'];

	const learningStack = [
		['', '', 'Solid', '', '', '', '', 'Next.js', '', 'TypeScript'],
		['Ansible', '', '', '', 'OpenStack', '', 'DApp/Web3.0'],
	];

	useEffect(() => {
		// We set up the page title
		document.title = 'I Am Seb w/ React';

		/* #region Landing Page Animation */
		const leftContainer = document.querySelector('.left__container');
		const rightContainer = document.querySelector('.right__container');
		const nextSectionArrow = document.querySelector('.next__section__arrow');

		gsap.fromTo(
			leftContainer,
			{ x: '-200%' },
			{
				duration: 2,
				x: '0%',
				ease: 'power2.out',
			}
		);
		gsap.fromTo(
			rightContainer,
			{ x: '200%' },
			{
				duration: 2,
				x: '0%',
				ease: 'power2.out',
			}
		);
		gsap.fromTo(
			nextSectionArrow,
			{ opacity: 0 },
			{
				duration: 1,
				opacity: 1,
				ease: 'power2.out',
			}
		);
		/* #endregion */

		/* #region me-in-few-words Animation */
		if (window.innerWidth >= 810) {
			const topPart = document.querySelector('.top__part');

			const line1 = document.querySelector('.line__1');
			const line2 = document.querySelector('.line__2');
			const line3 = document.querySelector('.line__3');
			const line4 = document.querySelector('.line__4');

			window.addEventListener('scroll', () => {
				// @ts-ignore
				if (window.scrollY > topPart.offsetTop - window.innerHeight / 2) {
					// @ts-ignore
					line1.style.animation =
						'animated-text__1 4s steps(87, end) 1s 1 normal both, animated-cursor__1 500ms steps(87, end) 1s 5';
					// @ts-ignore
					line2.style.animation =
						'animated-text__2 4s steps(75, end) 5s 1 normal both, animated-cursor__2 500ms steps(75, end) 5s 5';
					// @ts-ignore
					line3.style.animation =
						'animated-text__3 4s steps(91, end) 9s 1 normal both, animated-cursor__3 500ms steps(91, end) 9s 5';
					// @ts-ignore
					line4.style.animation =
						'animated-text__4 4s steps(77, end) 13s 1 normal both, animated-cursor__4 500ms steps(77, end) 13s infinite';
				}
			});
		}
		/* #endregion */

		/* #region My Stack Animation */
		const stackContainer1 = document.getElementById('stack__container__1');
		const card1 = document.getElementById('card1'),
			card2 = document.getElementById('card2'),
			card3 = document.getElementById('card3'),
			card4 = document.getElementById('card4'),
			card5 = document.getElementById('card5');

		// When stackContainer1 is entirely visible, we animate the cards
		// We track the scroll position
		window.addEventListener('scroll', () => {
			// When the scroll position is greater than the middle of the stackContainer1
			if (window.scrollY > stackContainer1.offsetTop - window.innerHeight / 2) {
				// We animate the cards using the keyframes
				card1.style.animation = 'card1 2s ease-out forwards';
				card2.style.animation = 'card2 2s ease-out forwards';
				card3.style.animation = 'card3 2s ease-out forwards';
				card4.style.animation = 'card4 2s ease-out forwards';
				card5.style.animation = 'card5 2s ease-out forwards';
			}
		});

		/* #endregion */
	}, []);

	return (
		<>
			<section id='about-me'>
				<div className='left__container'>
					<h2>
						FULLSTACK - <span>{'{DEVELOPER}'}</span>
					</h2>
					<img src={pictureOfMe} alt='portrait of me' />
				</div>
				<div className='right__container'>
					<h2>SEBASTIEN P.</h2>
				</div>
				<Link to='#me-in-few-words' className='next__link'>
					<div className='next__section__arrow'></div>
				</Link>
			</section>

			<section id='me-in-few-words'>
				<h2>Who am I?</h2>
				<div className='top__part'>
					<img src={Webdev} alt='Webdev' className='about__me__logo' />
					<p className='line__1'>I am a Fullstack Developer with a passion for creating and developing web applications.</p>
					<p className='line__2'>I am always looking for new challenges and opportunities to learn and grow.</p>
					<p className='line__3'>When I am not coding, you can find me playing with my son, video games, or watching movies.</p>
				</div>
				<div className='bottom__part'>
					<img src={HookedCode} alt='HookedCode' className='about__me__logo' />
					<p className='line__4'>I started learning web development in 2021 and I have been hooked ever since.</p>
				</div>
				<Link to='#my-stack' className='next__link'>
					<div className='next__section__arrow'></div>
				</Link>
			</section>

			<section id='my-stack'>
				<h2>My Tools </h2>
				<div id='stack__container__1' className='stack__container'>
					<div id='card1' className='stack__card'>
						<h3>Front-End</h3>
						<BlinkingWords words={frontStack} tag='front' />
					</div>
					<div id='card2' className='stack__card'>
						<h3>Back-End</h3>
						<BlinkingWords words={backStack} tag='back' />
					</div>
					<div id='card3' className='stack__card'>
						<h3>Others</h3>
						<BlinkingWords words={otherStack} tag='others' />
					</div>
				</div>

				<h3>And I try to keep up with something new on a daily basis...</h3>

				<div id='stack__container__2' className='stack__container'>
					<div id='card4' className='stack__card'>
						<h3>Front..</h3>
						<BlinkingWords words={learningStack[0]} tag='learningFront' />
					</div>
					<div id='card5' className='stack__card'>
						<h3>Back..</h3>
						<BlinkingWords words={learningStack[1]} tag='learningBack' />
					</div>
				</div>
			</section>

			{/* <section id='coming-soon'>
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
			</section> */}
		</>
	);
}

export default Home;
