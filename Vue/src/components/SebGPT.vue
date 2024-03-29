<script>

export default {
	name: 'OpenAI',
	data() {
		return {
			loadingToDisplay: false,
			errorToDisplay: '',
			answerToDisplay: '',
			userInput: '',
		}
	},
	methods: {
		handleClick() {
			this.loadingToDisplay = true
			this.errorToDisplay = ''
			this.answerToDisplay = ''
			console.log(this.userInput)

			const getAnswer = async () => {
				try {
					const gptResponse = await fetch('https://sebgptapi.sebdevcloud.synology.me/v1/chat/completions', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							max_tokens: 100,
							messages: [
								{
									role: 'user',
									content: this.userInput,
								},
							],
						}),
					});

					const gptResponseJson = await gptResponse.json();
					this.loadingToDisplay = false;
					this.answerToDisplay = gptResponseJson.choices[0].message.content;
				} catch (error) {
					this.loadingToDisplay = false;
					this.errorToDisplay = error.message;
				}
			}
			getAnswer();
		}
	}
}
</script>

<template>
	<div class='OpenAI'>
		<h3>Need something?</h3>
		<p class='subtitle'>
			Well, let's ask my GPT! <br />
		</p>

		<div class='answer'>
			<input type='text' name='prompt' id='prompt' placeholder='Your question' v-model="userInput"
				v-on:keydown.enter="handleClick" />
			<div v-if="loadingToDisplay">
				<p>Loading...</p>
				<p className='gpt__comment'>
					It might take up to 20/30 seconds. I require a lot of ressources and my owner is a poor guy looking for
					a well
					payed position :)
				</p>
			</div>
			<div v-if="errorToDisplay">
				<p>Error: {{ errorToDisplay }}</p>
			</div>
			<div v-if="answerToDisplay">
				{{ answerToDisplay }}
			</div>
		</div>
		<button class='button' v-on:click="handleClick">
			Ask GPT
		</button>
	</div>
</template>


<style scoped>
body .OpenAI {
	width: 95%;
	position: relative;
	box-shadow: var(--box-shadows-light-outset);
	border-radius: 1rem;
	padding: 1rem;
	line-height: 0.75rem;
	opacity: 0;
	animation: glitchingInElement 1.5s ease-in-out 4s forwards;
}

body.dark .OpenAI {
	box-shadow: var(--box-shadows-dark-outset);
}

body .OpenAI h3 {
	margin-top: 0;
	font-size: 1.25rem;
	box-shadow: var(--box-shadows-light-outset);
	border-radius: 0.5rem;
	padding: 1rem;
	width: fit-content;
}

body.dark .OpenAI h3 {
	box-shadow: var(--box-shadows-dark-outset);
}

body .OpenAI .subtitle {
	box-shadow: var(--box-shadows-light-inset);
	border-radius: 0.5rem;
	padding: 1rem;
	color: var(--main-orange-color);
	width: fit-content;
}

body.dark .OpenAI .subtitle {
	box-shadow: var(--box-shadows-dark-inset);
	color: var(--dark-main-orange-color);
}

body .OpenAI button {
	top: 0;
	position: absolute;
	right: 1rem;
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem;
	margin: 1rem 0.5rem;
	background-color: var(--bg__color);
	color: var(--main-orange-color);
	box-shadow: var(--box-shadows-light-outset);
}

body.dark .OpenAI button {
	box-shadow: var(--box-shadows-dark-outset);
	background-color: var(--dark__bg__color);
}

body .OpenAI button:hover {
	cursor: pointer;
	background-color: var(--bg__color__dark);
}

body.dark .OpenAI button:hover {
	background-color: var(--dark__bg__color__2);
}

body .OpenAI button:active {
	box-shadow: var(--box-shadows-light-inset);
	color: var(--dark-main-orange-color);
}

body.dark .OpenAI button:active {
	box-shadow: var(--box-shadows-dark-inset);
}

body .OpenAI .answer {
	max-width: 100%;
	height: 8rem;
	min-height: 0;
	line-height: 1rem;
	letter-spacing: 0.1rem;
	font-size: 0.8rem;
	color: var(--main-orange-color);
	box-shadow: var(--box-shadows-light-inset);
	border-radius: 0.5rem;
	overflow-y: scroll;
	padding: 0.5rem;
}

body.dark .OpenAI .answer {
	box-shadow: var(--box-shadows-dark-inset);
	color: var(--dark-main-orange-color);
}

body .OpenAI .answer #prompt {
	font-size: 0.75rem;
	height: 1rem;
	width: calc(100% - 2rem);
	box-shadow: var(--box-shadows-light-outset);
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	color: var(--main-orange-color);
	font-weight: 400;
	background-color: transparent;
	border: none;
	outline: none;
	overflow-y: scroll;
}

body.dark .OpenAI .answer #prompt {
	box-shadow: var(--box-shadows-dark-outset);
	color: var(--dark-main-orange-color);
}

body .OpenAI .answer #prompt:focus {
	box-shadow: var(--box-shadows-light-inset);
}

body.dark .OpenAI .answer #prompt:focus {
	box-shadow: var(--box-shadows-dark-inset);
}

body .OpenAI .answer #prompt::placeholder {
	color: var(--main-orange-color);
}

body.dark .OpenAI .answer #prompt::placeholder {
	color: var(--dark-main-orange-color);
}

body .OpenAI .answer p {
	font-size: 0.9rem;
	margin: 0.5rem;
}

body .OpenAI .answer p.gpt__comment {
	font-size: 0.75rem;
	font-style: italic;
	color: var(--main-orange-color);
}

body.dark .OpenAI .answer p.gpt__comment {
	color: var(--dark-main-orange-color);
}

/* #region Animations */
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

/* #endregion */

/* #region Media Queries */
@media screen and (orientation: portrait) and (max-width: 600px) {
	body .OpenAI {
		/* display: none; */
		width: 80%;
		margin: 0;
	}

	body .OpenAI .button {
		top: 4.25rem;
	}
}

@media screen and (orientation: landscape) and (max-width: 812px) {
	body .OpenAI {
		/* display: none; */
		width: 80%;
		margin: 0;
	}

	body .OpenAI .button {
		top: 4.25rem;
	}
}

@media screen and (orientation: portrait) and (min-width: 601px) and (max-width: 992px) {
	body .OpenAI {
		/* display: none; */
		width: 80%;
		margin: 0;
	}

	body .OpenAI .button {
		top: 4.25rem;
	}
}

@media screen and (orientation: landscape) and (min-width: 1020px) and (max-width: 1280px) {
	body .OpenAI {
		/* display: none; */
		width: 80%;
		margin: 0;
	}

	body .OpenAI .button {
		top: 4.25rem;
		right: 0rem;
		width: auto;
	}
}

/* #endregion */
</style>