/* #region  Navbar */
// Navbar Hover Effect based on mouse movement listener
document.querySelector('.menu__ul').onmousemove = (e) => {
	for (const li of document.querySelectorAll('.menu__li')) {
		// Get the position of the cursor in the li
		const rect = li.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;
		// Set the css variables
		li.style.setProperty('--mouse-x', `${x}px`);
		li.style.setProperty('--mouse-y', `${y}px`);
	}
};

// Navbar Click on Nav Link Listener
document.querySelectorAll('.menu__li').forEach((li) => {
	li.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = li.querySelector('.li__link').href;
	});
});

// On scroll, if on desktop, the navbar disappears or hamburger disappears
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
	if (window.innerWidth > 992) {
		navbar.style.animation = 'fadingOut 0.5s ease-in-out forwards';
		window.scrollY === 0 ? (navbar.style.animation = 'fadingIn 0.5s ease-in-out forwards') : null;
	}
});

// On hover, the navbar reappears
navbar.addEventListener('mouseenter', () => {
	navbar.style.animation ? (navbar.style.animation = 'fadingIn 0.5s ease-in-out forwards') : null;
});
/* #endregion */

/* #region  Dark Mode */
// Dark Mode Checkbox Listener
document.querySelector('#toggle_input').addEventListener('change', (e) => {
	if (e.target.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});

// Dark Mode based on user settings
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches &&
	!document.body.classList.contains('dark')
) {
	document.body.classList.add('dark');
}

// Watch for changes in the user settings.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
	if (e.matches) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});
/* #endregion */

/* #region  Responsive */
// Responsive Navbar
const open = document.querySelector('.hamburger__menu__container');
const close = document.querySelector('.close');
var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
open.addEventListener('click', () => {
	if (tl.reversed()) {
		tl.play();
	} else {
		tl.to('nav', { right: 0 })
			.to('nav', { height: '100vh', top: 0 }, '-=.1')
			.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
			.to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
			.to('nav h2', { opacity: 1 }, '-=1');
	}
	document.querySelectorAll('.li__content').forEach((li) => {
		setTimeout(() => {
			li.style.backgroundColor = 'var(--text__color)';
		}, 1800);
	});
});

close.addEventListener('click', () => {
	tl.reverse();
	document.querySelectorAll('.li__content').forEach((li) => {
		li.style.backgroundColor = 'transparent';
	});
	// Find a better management for this
	setTimeout(() => {
		window.location.reload();
	}, 2500);
});

// Scrolling is inactive when innerWidth < 992px and navbar is open
window.addEventListener('scroll', () => {
	if (window.innerWidth < 992 && tl.reversed()) {
		window.scrollTo(0, 0);
		console.log('scrolling');
	}
});
/* #endregion */
