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
