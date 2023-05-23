const letters = "0123456789ABCDEFGHIJKLMNOØPQRSTUVWXYZabcdefghijklmnoøpqrestuvwxyz!@#$%^&*()_+{}|:<>?/.,'";

let interval = null;

const screen = document.querySelector('body'),
	title = document.querySelector('.title'),
	subtitle = document.querySelector('.subtitle'),
	message = document.querySelector('.message');

const lettersEffect = (element, duration) => {
	let iteration = 0;

	clearInterval(interval);

	interval = setInterval(() => {
		element.innerText = element.innerText
			.split('')
			.map((letter, index) => {
				if (index < iteration) {
					return element.dataset.value[index];
				}

				return letters[Math.floor(Math.random() * letters.length)];
			})
			.join('');
		if (iteration >= element.dataset.value.length) {
			clearInterval(interval);
		}
		iteration += 1 / 3;
	}, duration);
};

screen.onload = () => {
	lettersEffect(title, 25);
	// We wait 1 second before starting the subtitle effect
	setTimeout(() => {
		lettersEffect(subtitle, 10);
	}, 250);
	// We wait 1 seconds before starting the message effect
	setTimeout(() => {
		lettersEffect(message, 5);
	}, 1250);
};
