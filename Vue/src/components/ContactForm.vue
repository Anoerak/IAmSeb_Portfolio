<script>
export default {
	name: 'ContactForm',
	data() {
		return {
			FORM_ENDPOINT: 'https://public.herotofu.com/v1/f13130f0-396f-11ee-b9b4-c111e90b930c',
			submitted: false,
			error: '',
		}
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();

			const inputs = e.target.elements;
			const data = {};

			for (let i = 0; i < inputs.length; i++) {
				if (inputs[i].name) {
					data[inputs[i].name] = inputs[i].value;
				}
			}

			fetch('https://public.herotofu.com/v1/f13130f0-396f-11ee-b9b4-c111e90b930c', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Form response was not ok');
					}
					this.submitted(true);
				})
				.catch((err) => {
					// Submit the form manually
					e.target.submit();
					this.error(err.message);
				});
		},
	}
	// If submitted, show a success message
	// If there's an error, show the error message

}
</script>

<template>
	<form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST'>
		<div class='input__field'>
			<label htmlFor='name'>Name</label>
			<input type='text' placeholder='Your name' name='name' required />
		</div>
		<div class='input__field'>
			<label htmlFor='email'>Email</label>
			<input type='email' placeholder='Email' name='email' required />
		</div>
		<div class='input__field'>
			<label htmlFor='message'>Message</label>
			<textarea placeholder='Your message' name='message' rows={10} cols={10} required />
		</div>
		<input type='hidden' name='honeypot' id='honeypot' />
		<div class='input__field'>
			<button type='submit'> Send a message </button>
		</div>
	</form>
</template>

<style >
:root {
	--input-text: #fd8331bf;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 2rem auto;
	padding: 2rem;
	max-width: 500px;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-inset);
	animation: glitchingInElement 2.5s ease-in-out 1s forwards;
}

body.dark form {
	box-shadow: var(--box-shadows-dark-inset);
}

form>.input__field {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	margin-bottom: 1rem;
}

form>.input__field>label {
	margin-bottom: 0.5rem;
}

form>.input__field>input,
form>.input__field>textarea {
	width: 100%;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	background-color: var(--bg__color);
	color: var(--input-text);
	box-shadow: var(--box-shadows-light-outset);
}

body.dark form>.input__field>input,
body.dark form>.input__field>textarea {
	background-color: var(--dark__bg__color);
	color: var(--dark-main-orange-color);
	box-shadow: var(--box-shadows-dark-outset);
}

form>.input__field>input:focus,
form>.input__field>textarea:focus {
	box-shadow: var(--box-shadows-light-inset);
}

body.dark form>.input__field>input:focus,
body.dark form>.input__field>textarea:focus {
	box-shadow: var(--box-shadows-dark-inset);
}

body form>.input__field>textarea {
	max-width: 100%;
}

form>.input__field>button {
	width: 50%;
	margin: 3rem auto 0 auto;
	padding: 1rem;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	background-color: var(--bg__color);
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-outset);
}

body.dark form>.input__field>button {
	background-color: var(--dark__bg__color);
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-outset);
	transition: all 0.75s ease-in-out;
}

body form>.input__field>button:hover {
	background-color: var(--bg__color__dark);
	color: var(--input-text);
	box-shadow: var(--box-shadows-light-outset);
	cursor: pointer;
}

body.dark form>.input__field>button:hover {
	background-color: var(--dark__bg__color__2);
	color: var(--dark-main-orange-color);
	box-shadow: var(--box-shadows-dark-outset);
}

body form>.input__field>button:active {
	background-color: var(--bg__color__dark);
	color: var(--input-text);
	box-shadow: var(--box-shadows-light-outset);
}

body.dark form>.input__field>button:active {
	background-color: var(--dark__bg__color__2);
	color: var(--dark-main-orange-color);
	box-shadow: var(--box-shadows-dark-outset);
}

form>.input__field>button::after {
	content: '';
	display: block;
	opacity: 1;
	background-color: var(--text__color);
	width: 50%;
	height: 1px;
	margin: 0.5rem auto 0 auto;
	transition: all 0.75s ease-in-out;
}

body.dark form>.input__field>button::after {
	background-color: var(--dark__text__color);
}

form>.input__field>button:hover::after,
body.dark form>.input__field>button:hover::after {
	opacity: 1;
	background-color: var(--dark-main-orange-color);
	animation: bounce 0.75s ease-in-out infinite;
}

/*
|------------------------------------------
| Animations
|------------------------------------------
*/

@keyframes input__field__error {
	0% {
		transform: translateX(0);
	}

	50% {
		transform: translateX(0.5rem);
	}

	100% {
		transform: translateX(0);
	}
}

@keyframes bounce {
	0% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(0.5rem);
	}

	100% {
		transform: translateY(0);
	}
}

@keyframes glitchingInElement {
	0% {
		opacity: 0;
	}

	1% {
		opacity: 1;
	}

	2% {
		opacity: 0;
	}

	3% {
		opacity: 1;
	}

	4% {
		opacity: 0;
	}

	5% {
		opacity: 1;
	}

	6% {
		opacity: 0;
	}

	7% {
		opacity: 1;
	}

	8% {
		opacity: 0;
	}

	9% {
		opacity: 1;
	}

	10% {
		opacity: 0;
	}

	11% {
		opacity: 1;
	}

	19% {
		opacity: 0;
	}

	20% {
		opacity: 1;
	}

	21% {
		opacity: 0;
	}

	22% {
		opacity: 1;
	}

	23% {
		opacity: 0;
	}

	24% {
		opacity: 1;
	}

	31% {
		opacity: 0;
	}

	32% {
		opacity: 1;
	}

	33% {
		opacity: 0;
	}

	34% {
		opacity: 1;
	}

	35% {
		opacity: 0;
	}

	36% {
		opacity: 1;
	}

	37% {
		opacity: 0;
	}

	38% {
		opacity: 1;
	}

	39% {
		opacity: 0;
	}

	40% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	51% {
		opacity: 1;
	}

	52% {
		opacity: 0;
	}

	53% {
		opacity: 1;
	}

	54% {
		opacity: 0;
	}

	55% {
		opacity: 1;
	}

	65% {
		opacity: 0;
	}

	66% {
		opacity: 1;
	}

	67% {
		opacity: 0;
	}

	68% {
		opacity: 1;
	}

	69% {
		opacity: 0;
	}

	80% {
		opacity: 1;
	}

	81% {
		opacity: 0;
	}

	82% {
		opacity: 1;
	}

	83% {
		opacity: 0;
	}

	84% {
		opacity: 1;
	}

	85% {
		opacity: 0;
	}

	86% {
		opacity: 1;
	}

	87% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

/*
	========================
		Responsive
	========================
*/

@media screen and (max-width: 600px) {
	form {
		width: auto;
	}
}
</style>