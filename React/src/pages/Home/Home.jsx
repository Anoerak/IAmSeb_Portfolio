import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { HashLink } from 'react-router-hash-link'; // For smooth scrolling
import pictureOfMe from '@Images/portrait_me.webp';
import Webdev from '@Logos/web_dev.png';
import HookedCode from '@Logos/hooked_code.png';
import Bot from '@Logos/bot.png';
import WelcomeBack from '@Logos/welcome-back.png';
import ReactNative from '@Logos/react-native.webp';
import VueJs from '@Logos/vuejs.webp';
import Symfony from '@Logos/symfony.webp';

import TypeWriter from '@Components/TypeWriter/TypeWriter';
import GlitchingText from '@Components/GlitchingText/GlitchingText';
import GlitchingImg from '@Components/GlitchingImg/GlitchingImg';
import BlinkingWords from '@Components/BlinkingWords/BlinkingWords';
import SebGPT from '@Components/SebGPT/SebGPT';

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
		const leftContainer = document.querySelector('.top__container');
		const rightContainer = document.querySelector('.bottom__container');
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
				<div className='top__container'>
					<GlitchingText
						text='****************************'
						dataValue='JUNIOR {FULLSTACK} DEVELOPER'
						className='title1'
						tags='h2'
					/>
					<br />
				</div>
				<div className='middle__container'>
					<GlitchingImg img={pictureOfMe} alt='portrait B&W' />
					<GlitchingText text='************' dataValue='SEBASTIEN P.' className='title2' tags='h2' />
					<div className='welcome'>
						<div className='welcome__img'>
							<img src={WelcomeBack} alt='Welcome Back sign' />
						</div>
						<div className='message__container'>
							<div className='message'>
								<p>
									Welcome to my web development portfolio! Here, you’ll find a showcase of my skills, creativity, and
									dedication to the craft of web development.
								</p>
								<p>
									This website is built using a modern JavaScript framework. Depending on your preference, you can choose
									to view this site in React, Vue, or Symfony.
								</p>
								<p>
									So go ahead, explore, and enjoy your journey through my portfolio. I hope it inspires you as much as it
									has inspired me in creating it. Happy browsing!
								</p>
							</div>
							<div className='links__container'>
								<Link to='https://iamseb.dev' className='framework react'>
									<img src={ReactNative} alt='Welcome Back sign' className='react__img' />
									React
								</Link>
								<Link to='https://iamseb.dev/vue' className='framework vue'>
									<img src={VueJs} alt='Welcome Back sign' className='vue__img' />
									Vue
								</Link>
								<Link to='https://iamseb.dev/symfony' className='framework symfony'>
									<img src={Symfony} alt='Welcome Back sign' className='symfony__img' />
									Symfony
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='bottom__container'>
					<GlitchingText text='************' dataValue='SEBASTIEN P.' className='title3' tags='h2' />
				</div>
				<HashLink to='#me-anchor' className='next__link'>
					<div className='next__section__arrow'></div>
				</HashLink>
			</section>

			<section id='me-in-few-words'>
				<h4 id='me-anchor'>Who am I?</h4>
				<div className='middle__container'>
					<div className='left__side'>
						<div className='top__part'>
							<img src={Webdev} alt='Webdev' className='about__me__logo' />
							<TypeWriter
								data={[
									{ text: 'I am a Fullstack Developer with a passion for creating and developing web applications.' },
									{ text: 'I am always looking for new challenges and opportunities to learn and grow.' },
									{ text: 'When I am not coding, you can find me playing with my son, video games, or watching movies.' },
								]}
							/>
						</div>
						<div className='bottom__part'>
							<img src={HookedCode} alt='HookedCode' className='about__me__logo' />
							<TypeWriter
								data={[{ text: 'I started learning web development in 2021 and I have been hooked ever since.' }]}
							/>
						</div>
					</div>
					<div className='right__side'>
						<img src={Bot} alt='Little Bot Head' />
						<SebGPT />
					</div>
				</div>
				<HashLink to='#my-stack' className='next__link'>
					<div className='next__section__arrow'></div>
				</HashLink>
			</section>

			<section id='my-stack'>
				<h4>My Tools </h4>
				<div id='stack__container__1' className='stack__container'>
					<div id='card1' className='stack__card'>
						<h5>Front-End</h5>
						<BlinkingWords words={frontStack} tag='front' />
					</div>
					<div id='card2' className='stack__card'>
						<h5>Back-End</h5>
						<BlinkingWords words={backStack} tag='back' />
					</div>
					<div id='card3' className='stack__card'>
						<h5>Others</h5>
						<BlinkingWords words={otherStack} tag='others' />
					</div>
				</div>

				<h6>And I try to keep up with something new on a daily basis...</h6>

				<div id='stack__container__2' className='stack__container'>
					<div id='card4' className='stack__card'>
						<h5>Front..</h5>
						<BlinkingWords words={learningStack[0]} tag='learningFront' />
					</div>
					<div id='card5' className='stack__card'>
						<h5>Back..</h5>
						<BlinkingWords words={learningStack[1]} tag='learningBack' />
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
