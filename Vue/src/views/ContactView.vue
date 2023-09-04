<script>
import GlitchingText from '@/components/GlitchingText.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
	name: 'ContactView',
	components: {
		GlitchingText,
		ContactForm
	},
	data() {
		return {
			//
		}
	},
}
</script>

<template>
	<section id='contact'>
		<GlitchingText text='************' dataValue='Code with Me' class='title1' tags='h2' />
		<p>
			✌️ Hey there! <br />
			<br />
			🙏🏻 Thanks for stopping by my digital crib 🛖. If you’ve got a project that needs some coding magic or just
			want to
			say hi,
			drop me a line using the form below.
			<br />
			<br />
			I’ll get back to you faster than you can say ‘JavaScript’!
		</p>
		<ContactForm />
	</section>
</template>

<style>
body>#root>section#contact {
	display: flex;
	height: auto;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 0 2rem;
	border-radius: 1rem;
	padding: 2rem;
	background-color: var(--bg__color);
	box-shadow: var(--box-shadows-light-inset);
	margin-bottom: 8rem;
}

body.dark>#root>section#contact {
	background-color: var(--dark__bg__color);
	box-shadow: var(--box-shadows-dark-inset);
}

body>#root>section#contact>h2 {
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-thin);
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	margin-bottom: 2rem;
}

body.dark>#root>section#contact>h2 {
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-thin);
}

@media screen and (orientation: portrait) and (max-width: 600px) {
	body>#root>section#contact {
		height: auto;
		margin-bottom: 4rem;
	}
}

@media screen and (orientation: landscape) and (max-width: 812px) {
	body>#root>section#contact {
		height: auto;
		margin-bottom: 4rem;
	}
}
</style>
