import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import gitHubLogo from '../../assets/img/GitHub_logo.png';
import linkedInLogo from '../../assets/img/LinkedIn_logo.png';

import './Footer.css';

function Footer() {
	useEffect(() => {
		// On scroll, if on desktop, the navbar disappears or hamburger disappears
		const footer = document.querySelector('footer');
		window.addEventListener('scroll', () => {
			if (window.innerWidth > 992) {
				footer.style.animation = 'fadingOut 0.5s ease-in-out forwards';
				// If the user is at the top of the page, the navbar reappears
				if (window.pageYOffset === 0) {
					footer.style.animation = 'fadingIn 0.5s ease-in-out forwards';
				}
			}
		});

		// On hover, the navbar reappears
		footer.addEventListener('mouseenter', () => {
			if (window.innerWidth > 992 && window.pageYOffset !== 0) {
				footer.style.animation = 'fadingIn 0.5s ease-in-out forwards';
			}
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
					<a href='https://github.com/Anoerak' className='footer__link' target='_blank' rel='noopener noreferrer'>
						<img src={gitHubLogo} alt='GitHub_Logo' className='logo github' />
					</a>
					<a
						href='https://www.linkedin.com/in/s%C3%A9bastien-p-48717074/'
						className='footer__link'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={linkedInLogo} alt='LinkedIn_Logo' className='logo linkedin' />
					</a>
				</div>
			</div>
			<div className='go__to__top__button'>
				<a href='#top' className='go__to__top__link'>
					<div className='go__to__top__icon'></div>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
