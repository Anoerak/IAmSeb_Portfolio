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
