import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import gitHubLogo from '../../assets/img/GitHub_logo.png';
import linkedInLogo from '../../assets/img/LinkedIn_logo.png';

import './Footer.css';

function Footer() {
	useEffect(() => {
		// On scroll, if on desktop, the footer disappears or hamburger disappears
		const footer = document.querySelector('footer');
		window.addEventListener('scroll', () => {
			footer.style.animation = 'fadingOut 0.5s ease-in-out forwards';
			// If the user is at the bottom of the page, the footer reappears
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				footer.style.animation = 'fadingIn 0.5s ease-in-out forwards';
			}
		});

		// On hover, the footer reappears
		footer.addEventListener('mouseenter', () => {
			footer.style.animation = 'fadingIn 0.5s ease-in-out forwards';
		});
		/* #endregion */
	}, []);

	return (
		<footer>
			<div className='footer__container'>
				<div className='footer__copy'>
					<span>&copy; 2023 IAmSeb</span>
				</div>
				<div className='footer__links'>
					<Link to='/contact' className='footer__link'>
						<FontAwesomeIcon icon={faPaperPlane} />
					</Link>
					<Link to='https://github.com/Anoerak' className='footer__link' target='_blank' rel='noopener noreferrer'>
						<img src={gitHubLogo} alt='GitHub_Logo' className='logo github' />
					</Link>
					<Link
						to='https://www.linkedin.com/in/s%C3%A9bastien-p-48717074/'
						className='footer__link'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={linkedInLogo} alt='LinkedIn_Logo' className='logo linkedin' />
					</Link>
				</div>
			</div>
			<div className='go__to__top__button'>
				<Link to='#' className='go__to__top__link'>
					<div className='go__to__top__icon'></div>
				</Link>
			</div>
		</footer>
	);
}

export default Footer;