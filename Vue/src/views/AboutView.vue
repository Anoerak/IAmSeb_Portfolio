<script>
import GlitchingText from '../components/GlitchingText.vue';

export default {
	name: 'AboutView',
	components: {
		GlitchingText
	},
	props: {
		type: Object,
		default: () => { }
	},
}
</script>

<template>
	<section id='about'>
		<GlitchingText text='********' dataValue='About Me' class='title1' tags='h2' />
		<div class='GitHub__stats__container'>
			<picture class='GitHub__stats__container__1'>
				<img src='https://streak-stats.demolab.com?user=Anoerak&theme=dark&mode=weekly' height='150'
					alt='GitHub Stats' />
			</picture>
			<picture class='GitHub__stats__container__2'>
				<img src='https://github-readme-stats-git-main-anoerak.vercel.app/api/top-langs/?username=Anoerak&theme=dark&layout=compact&langs_count=8&hide=html'
					alt='GitHub Stats' />
			</picture>
		</div>
		<div class='about__container'>
			<div class='about__text'>
				<p class='p__element 1'>
					👋 Hey there! I'm Sébastien, a passionate full-stack web developer with a love for crafting seamless
					digital
					experiences. With a blend of creativity and technical work, I thrive on transforming ideas into
					functional and
					visually stunning applications.
				</p>
				<p class='p__element 2'>
					🌐 My journey in the world of web development began several years ago, and since then, I've had the
					privilege of
					working on a diverse range of projects that have honed my skills across the entire stack. From
					architecting
					robust
					backends that handle (kind of 😅) complex data flows to designing intuitive user interfaces that
					prioritize user
					engagement, I'm dedicated to delivering excellence at every stage.
				</p>
				<p class='p__element 3'>
					🛠️ My toolkit is brimming with a variety of technologies, including but not limited to HTML, CSS,
					JavaScript,
					React,
					Node.js, and SQL. I revel in the challenge of staying up-to-date with the latest industry trends and
					integrating
					cutting-edge tools to elevate the quality of my work. I'm a firm believer in the power of continuous
					learning,
					and
					I'm always excited to embrace new technologies that can push the boundaries of what's possible.
				</p>
				<p class='p__element 4'>
					🌟 Beyond the code, I'm a strong advocate for user-centered design and seamless functionality. I firmly
					believe
					that
					a successful web application should not only look visually appealing but also provide a smooth and
					intuitive
					user
					experience. In a perfect world, each line of code I write would represent my dedication to crafting
					solutions
					that
					meet those expectations.
				</p>
				<p class='p__element 5'>
					🚀 When I'm not immersed in lines of code, you'll find me exploring the world, trying to teach but also
					to learn
					to
					and from my son and partner, or immersing myself in a good movie or some good music (country, if you
					read this
					😉).
					I'm a firm believer in maintaining a healthy work-life balance, as I find that it greatly fuels my
					creativity
					and
					problem-solving abilities when I know that I don't have to count the time spent with my family. I also
					enjoy
					practicing yoga and swimming, hiking, play video games and reading.
				</p>
				<p class='p__element 6'>
					🤝 If you're looking for a collaborative and driven developer to join your team or contribute to your
					project,
					I'd
					love to connect! Whether it's brainstorming new ideas, optimizing existing systems, or tackling fresh
					challenges,
					I'm always ready to embark on new coding adventures.
				</p>
				<p class='p__element 7'>
					Thanks for stopping by and taking a glimpse into my world of web development. Let's create something
					amazing
					together!
				</p>
			</div>
			<div class='about__picture'></div>
		</div>
	</section>
</template>

<style>
body>#root>section#about {
	min-height: 100vh;
	height: 100%;
	display: flex;
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

body.dark>#root>section#about {
	background-color: var(--dark__bg__color);
	box-shadow: var(--box-shadows-dark-inset);
}

body>#root>section#about>h2 {
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-thin);
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	margin-bottom: 2rem;
}

body.dark>#root>section#about>h2 {
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>section#about>.GitHub__stats__container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	width: 90%;
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-thin);
}

body.dark>#root>section#about>.GitHub__stats__container {
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>section#about>.GitHub__stats__container>picture {
	box-shadow: var(--box-shadows-light-inset);
	border-radius: 0.5rem;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
}

body.dark>#root>section#about>.GitHub__stats__container>picture {
	box-shadow: var(--box-shadows-dark-inset);
}

body>#root>section#about>.GitHub__stats__container>picture.GitHub__stats__container__1 {
	animation: glitchingInElement 3s ease-in-out 1s forwards;
}

body>#root>section#about>.GitHub__stats__container>picture.GitHub__stats__container__2 {
	animation: glitchingInElement 3.5s ease-in-out 1.5s forwards;
}

body>#root>section#about>.about__container {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-around;
	flex-wrap: wrap;
}

body>#root>section#about>.about__container>.about__text {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;
	column-count: 2;
	column-gap: 2rem;
}

body>#root>section#about>.about__container>.about__text>p {
	color: var(--text__color);
	text-align: justify;
	animation: appear 1s ease-in-out;
}

body.dark>#root>section#about>.about__container>.about__text>p {
	color: var(--dark__text__color);
}

/*
|--------------------------------------
| Animation
|-------------------------------------- 
 */

/* We create an animation that will make the text appear progressively when the user scrolls */
@keyframes appear {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0px);
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

@media screen and (orientation: portrait) and (max-width: 600px) {
	body>#root>section#about {
		height: auto;
		margin-bottom: 4rem;
	}

	body>#root>section#about>.GitHub__stats__container {
		width: 100%;
		padding: 1rem;
	}

	body>#root>section#about>.GitHub__stats__container>picture,
	body>#root>section#about>.GitHub__stats__container>picture>img {
		width: 100%;
		height: auto;
	}

	body>#root>section#about>.about__container {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	body>#root>section#about>.about__container>.about__text {
		width: 100%;
		column-count: 1;
	}
}

@media screen and (orientation: landscape) and (max-width: 812px) {
	body>#root>section#about {
		height: auto;
		margin-bottom: 2rem;
	}

	body>#root>section#about>.GitHub__stats__container {
		width: 100%;
		padding: 1rem;
	}

	body>#root>section#about>.GitHub__stats__container>picture {
		width: 45%;
		height: auto;
	}

	body>#root>section#about>.GitHub__stats__container>picture>img {
		width: 100%;
		height: auto;
	}

	body>#root>section#about>.about__container {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	body>#root>section#about>.about__container>.about__text {
		width: 100%;
		column-count: 1;
	}
}

@media screen and (orientation: portrait) and (min-width: 600px) and (max-width: 992px) {
	body>#root>section#about {
		height: auto;
		margin-bottom: 8rem;
	}

	body>#root>section#about>.GitHub__stats__container {
		width: 50%;
		padding: 1rem;
		flex-direction: column;
		justify-content: flex-start;
	}

	body>#root>section#about>.GitHub__stats__container>picture {
		width: 100%;
		height: auto;
	}

	body>#root>section#about>.GitHub__stats__container>picture>img {
		width: 100%;
		height: auto;
	}

	body>#root>section#about>.about__container {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	body>#root>section#about>.about__container>.about__text {
		width: 100%;
		column-count: 1;
	}
}
</style>
