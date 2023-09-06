<script>
import CarouselComponent from '../components/CarouselComponent.vue'
import GlitchingText from '../components/GlitchingText.vue';

import Frontend from '../assets/logos/frontend.png';
import Backend from '../assets/logos/back-end.png';
import Fullstack from '../assets/logos/full-stack.png';
import Others from '../assets/logos/others-dev.png';

export default {
	name: 'ProjectsView',
	data() {
		return {
			Frontend,
			Backend,
			Fullstack,
			Others,
			OhMyFoodMedias: [
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/desktop/OhMyFood_screenshot1.webp',
					alt: 'OhMyFood screenshot 1',
					legend: 'Loader'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/desktop/OhMyFood_screenshot2.webp',
					alt: 'OhMyFood screenshot 2',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/desktop/OhMyFood_screenshot3.webp',
					alt: 'OhMyFood screenshot 3',
					legend: 'Menu page'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/desktop/OhMyFood_screenshot4.webp',
					alt: 'OhMyFood screenshot 4',
					legend: 'Menu selection'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/desktop/OhMyFood_screenshot5.webp',
					alt: 'OhMyFood screenshot 5',
					legend: 'Mobile Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/desktop/OhMyFood_screenshot6.webp',
					alt: 'OhMyFood screenshot 6',
					legend: 'Mobile Menu page'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/OhMyFood_gif1.gif',
					alt: 'OhMyFood gif 1',
					legend: 'Desktop Navigation'
				},
				{
					path: '/vue/src/assets/projects_datas/OhMyFood/OhMyFood_gif2.gif',
					alt: 'OhMyFood gif 2',
					legend: 'Mobile Navigation'
				}
			],
			FisheyeMedias: [
				{
					path: '/vue/src/assets/projects_datas/Fisheye/desktop/Fisheye_screenshot1.webp',
					alt: 'Fisheye screenshot 1',
					legend: 'Homepage'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/desktop/Fisheye_screenshot2.webp',
					alt: 'Fisheye screenshot 2',
					legend: 'Profile page'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/desktop/Fisheye_screenshot3.webp',
					alt: 'Fisheye screenshot 3',
					legend: 'Gallery page'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/desktop/Fisheye_screenshot4.webp',
					alt: 'Fisheye screenshot 4',
					legend: 'Mobile profile selection'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/desktop/Fisheye_screenshot5.webp',
					alt: 'Fisheye screenshot 5',
					legend: 'Contact form'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/desktop/Fisheye_screenshot6.webp',
					alt: 'Fisheye screenshot 6',
					legend: 'Mobile gallery'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/Fisheye_screencast1.gif',
					alt: 'Fisheye gif 1',
					legend: 'Desktop Navigation'
				},
				{
					path: '/vue/src/assets/projects_datas/Fisheye/Fisheye_screencast2.gif',
					alt: 'Fisheye gif 2',
					legend: 'Mobile Navigation'
				}
			],
			SportSeeMedias: [
				{
					path: '/vue/src/assets/projects_datas/SportSee/desktop/SportSee_screenshot1.webp',
					alt: 'SportSee screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/SportSee/desktop/SportSee_screenshot2.webp',
					alt: 'SportSee screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/SportSee/desktop/SportSee_screenshot3.webp',
					alt: 'SportSee screenshot 3',
					legend: 'Activity bar chart'
				},
				{
					path: '/vue/src/assets/projects_datas/SportSee/desktop/SportSee_screenshot4.webp',
					alt: 'SportSee screenshot 4',
					legend: 'Activity curves chart'
				},
				{
					path: '/vue/src/assets/projects_datas/SportSee/SportSee_screencast.gif',
					alt: 'SportSee gif 1',
					legend: 'Navigation'
				}
			],
			ChaletsEtCaviarMedias: [
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/desktop/C&C_screenshot1.webp',
					alt: 'Chalets & Caviar screenshot 1',
					legend: 'Homepage'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/desktop/C&C_screenshot2.webp',
					alt: 'Chalets & Caviar screenshot 2',
					legend: 'Profile page'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/desktop/C&C_screenshot3.webp',
					alt: 'Chalets & Caviar screenshot 3',
					legend: 'Gallery page'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/desktop/C&C_screenshot4.webp',
					alt: 'Chalets & Caviar screenshot 4',
					legend: 'Mobile profile selection'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/desktop/C&C_screenshot5.webp',
					alt: 'Chalets & Caviar screenshot 5',
					legend: 'Contact form'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/desktop/C&C_screenshot6.webp',
					alt: 'Chalets & Caviar screenshot 6',
					legend: 'Mobile gallery'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/C&C_screencast1.gif',
					alt: 'Fisheye gif 1',
					legend: 'Desktop Navigation'
				},
				{
					path: '/vue/src/assets/projects_datas/Chalets&Caviar/C&C_screencast2.gif',
					alt: 'Fisheye gif 2',
					legend: 'Mobile Navigation'
				}
			],
			PiquanteMedias: [
				{
					path: '/vue/src/assets/projects_datas/Piquante/desktop/Piquante_screenshot1.webp',
					alt: 'Piquante screenshot 1',
					legend: 'Login page'
				},
				{
					path: '/vue/src/assets/projects_datas/Piquante/desktop/Piquante_screenshot2.webp',
					alt: 'Piquante screenshot 2',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/Piquante/desktop/Piquante_screenshot3.webp',
					alt: 'Piquante screenshot 3',
					legend: 'Create form'
				},
				{
					path: '/vue/src/assets/projects_datas/Piquante/desktop/Piquante_screenshot4.webp',
					alt: 'Piquante screenshot 4',
					legend: 'Item created'
				},
			],
			ExpressFoodMedias: [
				{
					path: '/vue/src/assets/projects_datas/ExpressFood/desktop/ExpressFood_screenshot1.webp',
					alt: 'ExpressFood screenshot 1',
					legend: 'Screen1'
				},
				{
					path: '/vue/src/assets/projects_datas/ExpressFood/desktop/ExpressFood_screenshot2.webp',
					alt: 'ExpressFood screenshot 2',
					legend: 'Screen2'
				},
				{
					path: '/vue/src/assets/projects_datas/ExpressFood/desktop/ExpressFood_screenshot3.webp',
					alt: 'ExpressFood screenshot 3',
					legend: 'Screen3'
				},
				{
					path: '/vue/src/assets/projects_datas/ExpressFood/desktop/ExpressFood_screenshot4.webp',
					alt: 'ExpressFood screenshot 4',
					legend: 'Screen4'
				},
				{
					path: '/vue/src/assets/projects_datas/ExpressFood/desktop/ExpressFood_screenshot5.webp',
					alt: 'ExpressFood screenshot 5',
					legend: 'Screen5'
				}
			],
			BileMoMedias: [
				{
					path: '/vue/src/assets/projects_datas/BileMo/desktop/Bilemo_screenshot1.webp',
					alt: 'BileMo screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/BileMo/desktop/Bilemo_screenshot2.webp',
					alt: 'BileMo screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/BileMo/desktop/Bilemo_screenshot3.webp',
					alt: 'BileMo screenshot 3',
					legend: 'Mobile Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/BileMo/Bilemo_screencast1.gif',
					alt: 'BileMo gif 1',
					legend: 'Navigation'
				},
				{
					path: '/vue/src/assets/projects_datas/BileMo/Bilemo_screencast2.gif',
					alt: 'BileMo gif 2',
					legend: 'Mobile Navigation'
				},
				{
					path: '/vue/src/assets/projects_datas/BileMo/Bilemo_screencast3.gif',
					alt: 'BileMo gif 3',
					legend: 'Mobile Navigation'
				}
			],
			GroupomaniaMedias: [
				{
					path: '/vue/src/assets/projects_datas/Groupomania/desktop/Groupomania_screenshot1.webp',
					alt: 'Groupomania screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/Groupomania/desktop/Groupomania_screenshot2.webp',
					alt: 'Groupomania screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/Groupomania/desktop/Groupomania_screenshot3.webp',
					alt: 'Groupomania screenshot 3',
					legend: 'Mobile Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/Groupomania/desktop/Groupomania_screenshot4.webp',
					alt: 'Groupomania screenshot 4',
					legend: 'Mobile Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/Groupomania/desktop/Groupomania_screenshot5.webp',
					alt: 'Groupomania screenshot 5',
					legend: 'Mobile Post creation'
				},
				{
					path: '/vue/src/assets/projects_datas/Groupomania/Groupomania_screencast.gif',
					alt: 'Groupomania gif 1',
					legend: 'Navigation'
				}
			],
			MyBlogMedias: [
				{
					path: '/vue/src/assets/projects_datas/MyBlog/desktop/myblog_screenshot1.webp',
					alt: 'MyBlog screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/MyBlog/desktop/myblog_screenshot2.webp',
					alt: 'MyBlog screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/MyBlog/desktop/myblog_screenshot3.webp',
					alt: 'MyBlog screenshot 3',
					legend: 'Mobile Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/MyBlog/desktop/myblog_screenshot4.webp',
					alt: 'MyBlog screenshot 4',
					legend: 'Mobile Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/MyBlog/desktop/myblog_screenshot5.webp',
					alt: 'MyBlog screenshot 5',
					legend: 'Mobile Post creation'
				},
				{
					path: '/vue/src/assets/projects_datas/MyBlog/myblog_screencast.gif',
					alt: 'MyBlog gif 1',
					legend: 'Navigation'
				}
			],
			SnowTricksMedias: [
				{
					path: '/vue/src/assets/projects_datas/SnowTricks/desktop/Snowtrick_screenshot1.webp',
					alt: 'SnowTricks screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/SnowTricks/desktop/Snowtrick_screenshot2.webp',
					alt: 'SnowTricks screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/SnowTricks/desktop/Snowtrick_screenshot3.webp',
					alt: 'SnowTricks screenshot 3',
					legend: 'Mobile Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/SnowTricks/desktop/Snowtrick_screenshot4.webp',
					alt: 'SnowTricks screenshot 4',
					legend: 'Mobile Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/SnowTricks/desktop/Snowtrick_screenshot5.webp',
					alt: 'SnowTricks screenshot 5',
					legend: 'Mobile Post creation'
				},
				{
					path: '/vue/src/assets/projects_datas/SnowTricks/desktop/Snowtrick_screenshot6.webp',
					alt: 'SnowTricks screenshot 6',
					legend: 'Mobile Post creation'
				}
			],
			TutorialsMedias: [
				{
					path: '/vue/src/assets/projects_datas/Tutorials/desktop/Tutorial_screenshot1.webp',
					alt: 'Tutorial screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/Tutorials/desktop/Tutorial_screenshot2.webp',
					alt: 'Tutorial screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/Tutorials/desktop/Tutorial_screenshot3.webp',
					alt: 'Tutorial screenshot 3',
					legend: 'Mobile Home page'
				}
			],
			FortuneQuotesMedias: [
				{
					path: '/vue/src/assets/projects_datas/FortuneQuotes/desktop/FortuneQuotes_screenshot1.webp',
					alt: 'FortuneQuotes screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/FortuneQuotes/desktop/FortuneQuotes_screenshot2.webp',
					alt: 'FortuneQuotes screenshot 2',
					legend: 'Dashboard'
				}
			],
			SebGPTMedias: [
				{
					path: '/vue/src/assets/projects_datas/SebGPT/desktop/SebGPT_screenshot1.webp',
					alt: 'SebGPT screenshot 1',
					legend: 'Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/SebGPT/desktop/SebGPT_screenshot2.webp',
					alt: 'SebGPT screenshot 2',
					legend: 'Dashboard'
				},
				{
					path: '/vue/src/assets/projects_datas/SebGPT/desktop/SebGPT_screenshot3.webp',
					alt: 'SebGPT screenshot 3',
					legend: 'Mobile Home page'
				},
				{
					path: '/vue/src/assets/projects_datas/SebGPT/desktop/SebGPT_screenshot4.webp',
					alt: 'SebGPT screenshot 4',
					legend: 'Mobile Dashboard'
				}
			]
		}
	},
	components: {
		GlitchingText,
		CarouselComponent
	},
	methods: {

	}
}
</script>

<template>
	<section id='projects'>
		<GlitchingText text='***********' dataValue='My Projects' class='title1' tags='h2' />
		<div class='shortcut__buttons'>
			<a href='#frontend' class='shortcut__button'>
				<img :src="Frontend" class='shortcut__button__icon' alt='Frontend' />
				Frontend
			</a>
			<a href='#backend' class='shortcut__button'>
				<img :src="Backend" class='shortcut__button__icon' alt='Backend' />
				Backend
			</a>
			<a href='#fullstack' class='shortcut__button'>
				<img :src="Fullstack" class='shortcut__button__icon' alt='Fullstack' />
				Fullstack
			</a>
			<a href='#others' class='shortcut__button'>
				<img :src="Others" class='shortcut__button__icon' alt='Others' />
				Others
			</a>
		</div>
		<main class='projects__container'>
			<div class='projects__category' id='frontend'>
				<h3>
					<img :src="Frontend" class='submenu__title__icon' alt='Frontend' />
					Frontend
				</h3>
				<div class='projects__category__list'>
					<div class='projects__category__list__item'>
						<h4>OhMyFood</h4>
						<h5>Modern CSS animations for online restaurant</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									OhMyFood is a company that wants to revolutionize the restaurant business by creating a
									100% online
									menu. To do this, the company wants to develop its own application. The aim of the
									application is to
									allow customers to compose their own menus and then order them in advance. This project
									is a proof
									of concept build with modern CSS animations.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>SASS</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Anoerak_P3_19042021'>
											<img src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P3_19042021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='OhMyFood Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="OhMyFoodMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>Fisheye</h4>
						<h5>Frontend website for photographers</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									Fisheye is a young startup that wants to be known as a platform for connecting
									independent
									photographers and clients. The goal is to develop a responsive website that allows users
									to discover
									the best photographers around them, view their albums, and contact them. The website
									should be
									modern, sleek, and creative.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>JS</li>
											<li>MVC</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Anoerak_P6_13072022'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P6_13072022&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='Fisheye Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="FisheyeMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>SportSee</h4>
						<h5>React Sport Dashboard / REST API</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									SPORTSEE is a company that specializes in sports performance analysis. They provide a
									service to
									professionals and individuals who want to monitor their physical activity. The company
									has decided
									to develop a new product: a web application that allows users to track their daily
									physical
									activity, thanks to data collected by connected devices. The application will allow
									users to view
									their performance over time, and compare themselves with other users.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>JS</li>
											<li>React</li>
											<li>Rechart</li>
											<li>Node.JS</li>
											<li>JS Doc</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Anoerak_P12_23092022'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P12_23092022&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='SportSee Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="SportSeeMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>Chalets & Caviar</h4>
						<h5>Wordpress website for high end cabins</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									Chalets & Caviar is a company that offers luxury chalets for rent in the Alps. The
									company wants to
									develop a showcase site to present its different chalets and allow visitors to book
									online. The
									company hasn't created a graphic charter or a mock-up of the site, meaning you'll have
									to create
									them yourself. The site will be developed with Wordpress.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>Wordpress</li>
											<li>Elementor</li>
											<li>OceanWP</li>
											<li>WPForms</li>
											<li>WP Mail</li>
											<li>SEOPress</li>
											<li>UpDraft</li>
											<li>WeGlot</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Proust_Sebastien_P2_02082023'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Proust_Sebastien_P2_02082023&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='Chalets & Caviar Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="ChaletsEtCaviarMedias" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='projects__category' id='backend'>
				<h3>
					<img :src="Backend" class='submenu__title__icon' alt='Backend' />
					Backend
				</h3>
				<div class='projects__category__list'>
					<div class='projects__category__list__item'>
						<h4>Piquante</h4>
						<h5>Create an API for a Sauces reviews app</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									So Pekocko is a company that creates spicy sauces whose composition is kept secret. The
									company
									wants to create a web application in which users can add their favorite sauces and like
									or dislike
									the sauces added by others. The frontend part of the project is already done, so the
									goal is to
									create the backend part of the application.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>Angular</li>
											<li>Node.JS</li>
											<li>Express</li>
											<li>MongoDB</li>
											<li>Mongoose</li>
											<li>Helmet</li>
											<li>bcrypt</li>
											<li>JWT</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Anoerak_P6_14062021'>
											<img src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P6_14062021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='Piquante Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="PiquanteMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>ExpressFood</h4>
						<h5>Create UML diagrams and a MySQL Database for a food delivery app</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									ExpressFood is a young startup that delivers high-quality meals to your home in less
									than 20 minutes
									with its fleet of bike couriers. In order to compete against Uber Eats, Deliveroo, and
									others,
									ExpressFood wants to develop a web application that allows users to order their favorite
									meals
									online. The company has contacted you in order to develop the application. The technical
									team is
									composed of two developers: you and your mentor. You'll have to develop the backend part
									of the
									application and your mentor will take care of the frontend part. You'll also have to
									create the
									database and the UML diagrams for the application.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>phpMyAdmin</li>
											<li>MySQL</li>
											<li>FreeForm</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<p>No Repository</p>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="ExpressFoodMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>BileMo</h4>
						<h5>
							Create an API for a mobile phone provider app, using Symfony and Doctrine ORM, and secure it
							with OAuth2
						</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									BileMo is a young company that offers a variety of premium mobile phones. You are in
									charge of the
									development of the API that will be used by the mobile application developers, the
									frontend part of
									the BileMo website, and the API documentation.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>PHP8</li>
											<li>Symfony6</li>
											<li>Composer</li>
											<li>nelmio</li>
											<li>lexik</li>
											<li>hateoas</li>
											<li>Doctrine</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/BileMo'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=BileMo&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='BileMo Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="BileMoMedias" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='projects__category' id='fullstack'>
				<h3>
					<img :src="Fullstack" class='submenu__title__icon' alt='Fullstack' />
					Fullstack
				</h3>
				<div class='projects__category__list'>
					<div class='projects__category__list__item'>
						<h4>Groupomania</h4>
						<h5>Create a corporate social networking</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									{/* We'll use OpenClassrooms description */}
									Groupomania is a large company that wants to develop a social network for its employees.
									The company
									has decided to start with an MVP (Minimum Viable Product) of its application. The
									technical team is
									composed of you (a fullstack developer). You are responsible for the development of both
									the
									frontend and the backend of the application.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>Vue.js</li>
											<li>Node.JS</li>
											<li>Express</li>
											<li>MongoDB</li>
											<li>Mongoose</li>
											<li>Helmet</li>
											<li>bcrypt</li>
											<li>JWT</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Anoerak_P7_28072021'>
											<img src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P7_28072021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='Groupomania Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="GroupomaniaMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>My First PHP blog</h4>
						<h5>
							Create a blog with a backend and a frontend, using PHP and MySQL, and secure it with a login and
							a password
						</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									You are a freelance developer specialized in PHP and MySQL. You are contacted by Barney
									Stinson, a
									famous blogger who wants to create a new blog. He wants to be able to write articles,
									and to allow
									his readers to comment on them. No design is required, but the blog should have a
									backend and a
									frontend. Barney wants to be able to add, edit and delete articles as well as comments.
									He also
									wants to be able to delete inappropriate comments. Finally, Barney wants his blog to be
									secured. The
									users of the blog will be able to register and connect to the blog. They must be able to
									comment on
									the articles written by Barney, but they cannot write articles themselves. The only
									person who can
									write articles is Barney.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>PHP8</li>
											<li>MySQL</li>
											<li>ChatGPT (text)</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Barneys_blog'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Barneys_blog&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='Barneys_blog Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="MyBlogMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>Snowtricks</h4>
						<h5>
							Create a website for a snowboard community, using Symfony and Doctrine ORM, and secure it with a
							login and a
							password
						</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									{/* We are using the context provided by OpenClassroom in this page:
									https://openclassrooms.com/fr/paths/500/projects/42/assignment*/}
									You are a freelance developer specialized in PHP and Symfony. You are contacted by Jimmy
									Sweat, a
									famous snowboarder who wants to create a snowboard community website. He wants to share
									tricks and
									tips with other boarders. He also wants the website to be a place where the community
									can discuss
									about snowboarding. You are asked to create a prototype of the application. Jimmy Sweat
									wants the
									technical solution to be based on Symfony. You are free to use any bundle or library to
									help you
									build the project. The design is not important, so you can use Bootstrap if you want, or
									develop
									your own CSS.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>PHP8</li>
											<li>Symfony6</li>
											<li>Composer</li>
											<li>Doctrine</li>
											<li>Twig</li>
											<li>MySQL</li>
											<li>ChatGPT (text)</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/SnowTricks'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=SnowTricks&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='SnowTricks Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="SnowTricksMedias" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='projects__category' id='others'>
				<h3>
					<img :src="Others" class='submenu__title__icon' alt='Others' />
					Others
				</h3>
				<div class='projects__category__list'>
					<div class='projects__category__list__item'>
						<h4>Tutorials</h4>
						<h5>Some tips I hope will be helpful</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									Here are some tutorials I made to help me remember some tips I found useful. I hope they
									will be
									helpful to you too.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>React</li>
											<li>Npm</li>
											<li>Git Package</li>
											<li>Craco</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/Tutorials'>
											<img src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Tutorials&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='Tutorials Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="TutorialsMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>Fortune Quote - bash on Windows</h4>
						<h5>Display a random quote in the terminal when you open it, using bash on Windows.</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									Here is a little script I made to display a random quote in the terminal when you open
									it, using
									bash on Windows. I hope you'll like it.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>Bash</li>
											<li>Windows</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/fortune_quotes'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=fortune_quotes&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='fortune_quotes Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="FortuneQuotesMedias" />
								</div>
							</div>
						</div>
					</div>
					<div class='projects__category__list__item'>
						<h4>SebGPT 😅</h4>
						<h5>Host and integrate a GPT AI on my server and portfolio</h5>
						<div class='projects__category__list__item__container'>
							<div class='left__container'>
								<p class='project__description'>
									SebGPT is a GPT AI based on Llama-gpt, deployed on my server and integrated into my
									portfolio. It is
									able to generate text based on the text you give it.
								</p>
								<div class='bottom'>
									<div class='technologies'>
										<h5>Technologies</h5>
										<ul>
											<li>Python</li>
											<li>Docker</li>
											<li>Portainer</li>
											<li>React</li>
											<li>NodeJS</li>
											<li>Express</li>
											<li>Llama 2</li>
											<li>ChatGPT (text)</li>
										</ul>
									</div>
									<div class='links'>
										<h5>Code on GitHub</h5>
										<a href='https://github.com/Anoerak/llama-gpt'>
											<img align='left'
												src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=llama-gpt&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
												alt='fortune_quotes Github Repository' />
										</a>
									</div>
								</div>
							</div>
							<div class='right__container'>
								<div class='medias'>
									<CarouselComponent :medias="SebGPTMedias" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</section>
</template>

<style>
body>#root>#projects {
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

body.dark>#root>#projects {
	background-color: var(--dark__bg__color);
	box-shadow: var(--box-shadows-dark-inset);
}

body>#root>#projects>h2 {
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-thin);
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	margin-bottom: 2rem;
}

body.dark>#root>#projects>h2 {
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>#projects>.shortcut__buttons {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	width: 75%;
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-thin);
}

body.dark>#root>#projects>.shortcut__buttons {
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>#projects>.shortcut__buttons>.shortcut__button {
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 20%;
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-thin);
	text-decoration: none;
	color: var(--text__color);
	transition: all 0.2s ease-in-out;
}

body.dark>#root>#projects>.shortcut__buttons>.shortcut__button {
	box-shadow: var(--box-shadows-dark-thin);
	color: var(--dark__text__color);
}

body>#root>#projects>.shortcut__buttons>.shortcut__button::after {
	content: '';
	position: absolute;
	bottom: 0.75rem;
	right: 1.75rem;
	display: block;
	opacity: 1;
	width: 40%;
	height: 1px;
	background-color: var(--text__color);
	margin: 0.5rem auto 0 auto;
}

body.dark>#root>#projects>.shortcut__buttons>.shortcut__button::after {
	background-color: var(--dark-main-orange-color);
}

body>#root>#projects>.shortcut__buttons>.shortcut__button:hover::after {
	opacity: 1;
	background-color: var(--main-orange-color);
	animation: bounce 0.75s ease-in-out infinite;
}

body>#root>#projects>.shortcut__buttons>.shortcut__button>.shortcut__button__icon {
	width: 2rem;
	height: 2rem;
}

body.dark>#root>#projects>.shortcut__buttons>.shortcut__button>.shortcut__button__icon {
	filter: invert(1);
}

body>#root>#projects>.shortcut__buttons>.shortcut__button:hover {
	filter: brightness(1.1);
	box-shadow: var(--box-shadows-light-thin);
	color: var(--main-orange-color);
}

body.dark>#root>#projects>.shortcut__buttons>.shortcut__button:hover {
	filter: brightness(1.1);
	box-shadow: var(--box-shadows-dark-thin);
	color: var(--dark-main-orange-color);
}

body>#root>#projects>.shortcut__buttons>.shortcut__button:active {
	box-shadow: var(--box-shadows-light-inset);
	color: var(--main-orange-color);
}

body.dark>#root>#projects>.shortcut__buttons>.shortcut__button:active {
	box-shadow: var(--box-shadows-dark-inset);
	color: var(--dark-main-orange-color);
}

body>#root>#projects>.projects__container {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	padding: 2rem 1rem;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-thin);
}

body.dark>#root>#projects>.projects__container {
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>#projects>.projects__container>.projects__category {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-inset);
	margin-bottom: 2rem;
}

body.dark>#root>#projects>.projects__container>.projects__category {
	box-shadow: var(--box-shadows-dark-inset);
}

body>#root>#projects>.projects__container>.projects__category>h3>.submenu__title__icon {
	width: 2rem;
	height: 2rem;
}

body.dark>#root>#projects>.projects__container>.projects__category>h3>.submenu__title__icon {
	filter: invert(1);
}

body>#root>#projects>.projects__container>.projects__category>h3 {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-thin);
	border-radius: 1rem;
	padding: 1rem 4rem;
	margin-bottom: 2rem;
}

body.dark>#root>#projects>.projects__container>.projects__category>h3 {
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	width: 95%;
	padding: 1rem;
	margin-bottom: 2rem;
	border-radius: 1rem;
	box-shadow: var(--box-shadows-light-thin);
	text-decoration: none;
	color: var(--text__color);
	transition: all 0.2s ease-in-out;
}

body.dark>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item {
	box-shadow: var(--box-shadows-dark-thin);
	color: var(--dark__text__color);
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>h4 {
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-thin);
	border-radius: 1rem;
	padding: 1rem 2rem;
	margin-bottom: 1rem;
}

body.dark>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>h4 {
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-thin);
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>h5 {
	color: var(--main-orange-color);
	box-shadow: var(--box-shadows-light-inset);
	border-radius: 1rem;
	padding: 1rem 2rem;
	margin-bottom: 2rem;
}

body.dark>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>h5 {
	color: var(--dark-main-orange-color);
	box-shadow: var(--box-shadows-dark-inset);
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-around;
	width: 100%;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container,
body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
	max-width: 45%;
	height: 80%;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-around;
	gap: 2rem;
	width: 100%;
	margin-top: 2rem;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies>h5,
body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.links>h5 {
	color: var(--text__color);
	box-shadow: var(--box-shadows-light-outset);
	border-radius: 1rem;
	padding: 0.5rem 1rem;
	margin-bottom: 2rem;
}

body.dark>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies>h5,
body.dark>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.links>h5 {
	color: var(--dark__text__color);
	box-shadow: var(--box-shadows-dark-outset);
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies>ul {
	list-style-type: none;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies>ul>li::before {
	content: '🧑🏼‍💻 ';
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies>ul>li {
	margin-left: -2rem;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.links {
	margin: 0;
}

body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias {
	box-shadow: var(--box-shadows-light-inset);
	border-radius: 1rem;
	padding: 1rem;
	max-width: 33rem;
	height: 24rem;
	overflow: hidden;
}

body.dark>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias {
	box-shadow: var(--box-shadows-dark-inset);
}

/* 
|------------------------------------------
| Animations
|------------------------------------------
 */
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

@media screen and (orientation: portrait) and (max-width: 600px) {
	body>#root>#projects {
		margin-bottom: 4rem;
	}

	body>#root>#projects>.shortcut__buttons {
		width: 80%;
		gap: 2rem;
		padding: 1rem;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button {
		width: 25%;
		flex-direction: column;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button::after {
		width: 45%;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button>.shortcut__button__icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	body>#root>#projects>.projects__container {
		padding: 0.5rem;
		width: 105%;
	}

	body>#root>#projects>.projects__container>.projects__category {
		padding: 0;
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category>h3 {
		padding: 1rem 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list {
		width: 80%;
		flex-wrap: nowrap;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item {
		width: 95%;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>h4 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>h5 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container {
		flex-direction: column;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container,
	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container {
		width: 100%;
		max-width: 100%;
		height: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom {
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin-top: 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies,
	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.links {
		width: 100%;
		margin-bottom: 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.technologies>h5,
	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.links>h5 {
		padding: 0.5rem 1rem;
		margin-bottom: 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container>.bottom>.links a img {
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias {
		width: calc(100% - 1rem);
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		padding: 0.5rem;
		border-radius: 0;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias .control-dots {
		display: none;
	}
}

@media screen and (orientation: landscape) and (max-width: 812px) {
	body>#root>#projects {
		margin-bottom: 4rem;
	}

	body>#root>#projects>.shortcut__buttons {
		width: 80%;
		gap: 2rem;
		padding: 1rem;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button {
		width: 25%;
		flex-direction: column;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button::after {
		width: 65%;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button>.shortcut__button__icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	body>#root>#projects>.projects__container {
		padding: 0.5rem;
		width: 105%;
	}

	body>#root>#projects>.projects__container>.projects__category {
		padding: 0;
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category>h3 {
		padding: 1rem 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list {
		width: 90%;
		flex-wrap: nowrap;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item {
		width: 95%;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item h4 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item h5 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container {
		flex-direction: column;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container,
	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container {
		width: 100%;
		max-width: 100%;
		height: auto;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias {
		width: calc(100% - 1rem);
		height: auto;
		max-width: 100%;
		max-height: 100%;
		padding: 0.5rem;
		border-radius: 0;
		margin: 1rem auto;
	}
}

@media screen and (orientation: portrait) and (min-width: 600px) and (max-width: 992px) {
	body>#root>#projects {
		margin-bottom: 8rem;
	}

	body>#root>#projects>.shortcut__buttons {
		width: 80%;
		gap: 2rem;
		padding: 1rem;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button {
		width: 10%;
		flex-direction: column;
	}

	body>#root>#projects>.projects__container {
		padding: 0.5rem;
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category {
		padding: 0;
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category>h3 {
		padding: 1rem 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list {
		width: 90%;
		flex-wrap: nowrap;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item {
		width: 95%;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item h4 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item h5 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container {
		flex-direction: column;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container,
	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container {
		width: 100%;
		max-width: 100%;
		height: auto;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		padding: 0.5rem;
		border-radius: 0;
		margin: 1rem auto;
	}
}

@media screen and (orientation: landscape) and (min-width: 812px) and (max-width: 1300px) {
	body>#root>#projects {
		margin-bottom: 8rem;
	}

	body>#root>#projects>.shortcut__buttons {
		width: 80%;
		gap: 2rem;
		padding: 1rem;
	}

	body>#root>#projects>.shortcut__buttons>.shortcut__button {
		width: 10%;
		flex-direction: column;
	}

	body>#root>#projects>.projects__container {
		padding: 0.5rem;
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category {
		padding: 0;
		width: 100%;
	}

	body>#root>#projects>.projects__container>.projects__category>h3 {
		padding: 1rem 2rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list {
		width: 90%;
		flex-wrap: nowrap;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item {
		width: 95%;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item h4 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item h5 {
		padding: 1rem 1rem;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container {
		flex-direction: column;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.left__container,
	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container {
		width: 100%;
		max-width: 100%;
		height: auto;
	}

	body>#root>#projects>.projects__container>.projects__category>.projects__category__list>.projects__category__list__item>.projects__category__list__item__container>.right__container>.medias {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		padding: 0.5rem;
		border-radius: 0;
		margin: 1rem auto;
	}
}
</style>