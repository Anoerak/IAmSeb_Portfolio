import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling
import pictureOfMe from '../../assets/img/portrait_me.webp';
import BlinkingWords from '../../components/BlinkingWords/BlinkingWords';
// import Terminal from '../../components/Terminal/Terminal';
// import Card from '../../components/Card/Card';
// import IAmSeb from '../../components/IAmSeb/IAmSeb';

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

		/* #region My Stack Animation */
		const stackContainer1 = document.getElementById('stack__container__1'),
			stackContainer2 = document.getElementById('stack__container__2');
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
			}
			// When the scroll position is greater than the middle of the stackContainer2
			if (window.scrollY > stackContainer2.offsetTop - window.innerHeight / 2) {
				// We animate the cards using the keyframes
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
					<Link to='#my-stack'>
						<div className='next__section__arrow'></div>
					</Link>
					<h2>SEBASTIEN P.</h2>
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
			<section id='my-stack'>
				<h2>My Toolbox </h2>
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
						<h3>Other</h3>
						<BlinkingWords words={otherStack} tag='others' />
					</div>
				</div>

				<h3>And I try to keep up with something new on a daily basis...</h3>

				<div id='stack__container__2' className='stack__container'>
					<div id='card4' className='stack__card'>
						<h3>Front Homeworks</h3>
						<BlinkingWords words={learningStack[0]} tag='learningFront' />
					</div>
					<div id='card5' className='stack__card'>
						<h3>Back Homeworks</h3>
						<BlinkingWords words={learningStack[1]} tag='learningBack' />
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
