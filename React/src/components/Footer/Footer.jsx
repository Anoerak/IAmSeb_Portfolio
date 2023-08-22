import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // For smooth scrolling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import gitHubLogo from '@Logos/GitHub_logo2.webp';
import linkedInLogo from '@Logos/LinkedIn_logo.webp';

import './Footer.css';

function Footer() {
	useEffect(() => {
		// On scroll, if on desktop, the footer disappears or hamburger disappears
		const footer = document.querySelector('footer');
		footer.style.animation = 'fadingIn 0.25s ease-in-out forwards, fadingOut 0.25s ease-in-out forwards';
		window.addEventListener('scroll', () => {
			if (window.innerWidth > 992) {
				footer.style.animation = 'fadingOut 0.5s ease-in-out forwards';
				// If the user is at the bottom of the page, the footer reappears
				if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 10) {
					footer.style.animation = 'fadingIn 0.5s ease-in-out forwards';
				}
			}
		});

		// On hover, the footer reappears
		footer.addEventListener('mouseenter', () => {
			footer.style.animation = 'fadingIn 0.25s ease-in-out forwards';
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
				<HashLink to='#' className='go__to__top__link'>
					<div className='go__to__top__icon'></div>
				</HashLink>
			</div>
		</footer>
	);
}

export default Footer;
