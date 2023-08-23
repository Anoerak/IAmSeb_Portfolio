import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Frontend from '@Logos/frontend.png';
import Backend from '@Logos/back-end.png';
import Fullstack from '@Logos/full-stack.png';
import Others from '@Logos/others-dev.png';
import GlitchingText from '@Components/GlitchingText/GlitchingText';

import './Projects.css';

function Projects() {
	return (
		<section id='projects'>
			<GlitchingText text='***********' dataValue='My Projects' className='title1' tags='h2' />
			<div className='shortcut__buttons'>
				<a href='#frontend' className='shortcut__button'>
					<img src={Frontend} className='shortcut__button__icon' alt='Frontend' />
					Frontend
				</a>
				<a href='#backend' className='shortcut__button'>
					<img src={Backend} className='shortcut__button__icon' alt='Backend' />
					Backend
				</a>
				<a href='#fullstack' className='shortcut__button'>
					<img src={Fullstack} className='shortcut__button__icon' alt='Fullstack' />
					Fullstack
				</a>
				<a href='#others' className='shortcut__button'>
					<img src={Others} className='shortcut__button__icon' alt='Others' />
					Others
				</a>
			</div>
			<main className='projects__container'>
				<div className='projects__category' id='frontend'>
					<h3>
						<img src={Frontend} className='submenu__title__icon' alt='Frontend' />
						Frontend
					</h3>
					<div className='projects__category__list'>
						<div className='projects__category__list__item'>
							<h4>OhMyFood</h4>
							<h5>Modern CSS animations for online restaurant</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										OhMyFood is a company that wants to revolutionize the restaurant business by creating a 100% online
										menu. To do this, the company wants to develop its own application. The aim of the application is to
										allow customers to compose their own menus and then order them in advance. This project is a proof
										of concept build with modern CSS animations.
									</p>
									<div className='bottom'>
										<div className='technologies'>
											<h5>Technologies</h5>
											<ul>
												<li>HTML5</li>
												<li>CSS3</li>
												<li>SASS</li>
											</ul>
										</div>
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Anoerak_P3_19042021'>
												<img
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P3_19042021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='OhMyFood Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/desktop/OhMyFood_screenshot1.webp')}
													alt='OhMyFood screenshot 1'
												/>
												<p className='legend'>Loader</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/desktop/OhMyFood_screenshot2.webp')}
													alt='OhMyFood screenshot 2'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/desktop/OhMyFood_screenshot3.webp')}
													alt='OhMyFood screenshot 3'
												/>
												<p className='legend'>Menu page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/desktop/OhMyFood_screenshot4.webp')}
													alt='OhMyFood screenshot 4'
												/>
												<p className='legend'>Menu selection</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/desktop/OhMyFood_screenshot5.webp')}
													alt='OhMyFood screenshot 5'
												/>
												<p className='legend'>Mobile Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/desktop/OhMyFood_screenshot6.webp')}
													alt='OhMyFood screenshot 6'
												/>
												<p className='legend'>Mobile Menu page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/OhMyFood_gif1.gif')}
													alt='OhMyFood gif 1'
												/>
												<p className='legend'>Desktop Navigation</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/OhMyFood/OhMyFood_gif2.gif')}
													alt='OhMyFood gif 2'
												/>
												<p className='legend'>Mobile Navigation</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>Fisheye</h4>
							<h5>Frontend website for photographers</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										Fisheye is a young startup that wants to be known as a platform for connecting independent
										photographers and clients. The goal is to develop a responsive website that allows users to discover
										the best photographers around them, view their albums, and contact them. The website should be
										modern, sleek, and creative.
									</p>
									<div className='bottom'>
										<div className='technologies'>
											<h5>Technologies</h5>
											<ul>
												<li>HTML5</li>
												<li>CSS3</li>
												<li>JS</li>
												<li>MVC</li>
											</ul>
										</div>
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Anoerak_P6_13072022'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P6_13072022&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Fisheye Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/desktop/Fisheye_screenshot1.webp')}
													alt='Fisheye screenshot 1'
												/>
												<p className='legend'>Homepage</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/desktop/Fisheye_screenshot2.webp')}
													alt='Fisheye screenshot 2'
												/>
												<p className='legend'>Profile page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/desktop/Fisheye_screenshot3.webp')}
													alt='Fisheye screenshot 3'
												/>
												<p className='legend'>Gallery page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/desktop/Fisheye_screenshot4.webp')}
													alt='Fisheye screenshot 4'
												/>
												<p className='legend'>Mobile profile selection</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/desktop/Fisheye_screenshot5.webp')}
													alt='Fisheye screenshot 5'
												/>
												<p className='legend'>Contact form</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/desktop/Fisheye_screenshot6.webp')}
													alt='Fisheye screenshot 6'
												/>
												<p className='legend'>Mobile gallery</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/Fisheye_screencast1.gif')}
													alt='Fisheye gif 1'
												/>
												<p className='legend'>Desktop Navigation</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Fisheye/Fisheye_screencast2.gif')}
													alt='Fisheye gif 2'
												/>
												<p className='legend'>Mobile Navigation</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>SportSee</h4>
							<h5>React Sport Dashboard / REST API</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										SPORTSEE is a company that specializes in sports performance analysis. They provide a service to
										professionals and individuals who want to monitor their physical activity. The company has decided
										to develop a new product: a web application that allows users to track their daily physical
										activity, thanks to data collected by connected devices. The application will allow users to view
										their performance over time, and compare themselves with other users.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Anoerak_P12_23092022'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P12_23092022&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='SportSee Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SportSee/desktop/SportSee_screenshot1.webp')}
													alt='SportSee screenshot 1'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SportSee/desktop/SportSee_screenshot2.webp')}
													alt='SportSee screenshot 2'
												/>
												<p className='legend'>Dashboard</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SportSee/desktop/SportSee_screenshot3.webp')}
													alt='SportSee screenshot 3'
												/>
												<p className='legend'>Activity bar chart</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SportSee/desktop/SportSee_screenshot4.webp')}
													alt='SportSee screenshot 4'
												/>
												<p className='legend'>Activity curves chart</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SportSee/SportSee_screencast.gif')}
													alt='SportSee gif 1'
												/>
												<p className='legend'> Navigation</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>Chalets & Caviar</h4>
							<h5>Wordpress website for high end cabins</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										Chalets & Caviar is a company that offers luxury chalets for rent in the Alps. The company wants to
										develop a showcase site to present its different chalets and allow visitors to book online. The
										company hasn't created a graphic charter or a mock-up of the site, meaning you'll have to create
										them yourself. The site will be developed with Wordpress.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Proust_Sebastien_P2_02082023'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Proust_Sebastien_P2_02082023&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Chalets & Caviar Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/desktop/C&C_screenshot1.webp')}
													alt='Chalets & Caviar screenshot 1'
												/>
												<p className='legend'>Homepage</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/desktop/C&C_screenshot2.webp')}
													alt='Chalets & Caviar screenshot 2'
												/>
												<p className='legend'>Profile page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/desktop/C&C_screenshot3.webp')}
													alt='Chalets & Caviar screenshot 3'
												/>
												<p className='legend'>Gallery page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/desktop/C&C_screenshot4.webp')}
													alt='Chalets & Caviar screenshot 4'
												/>
												<p className='legend'>Mobile profile selection</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/desktop/C&C_screenshot5.webp')}
													alt='Chalets & Caviar screenshot 5'
												/>
												<p className='legend'>Contact form</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/desktop/C&C_screenshot6.webp')}
													alt='Chalets & Caviar screenshot 6'
												/>
												<p className='legend'>Mobile gallery</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/C&C_screencast1.gif')}
													alt='Fisheye gif 1'
												/>
												<p className='legend'>Desktop Navigation</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Chalets&Caviar/C&C_screencast2.gif')}
													alt='Fisheye gif 2'
												/>
												<p className='legend'>Mobile Navigation</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='projects__category' id='backend'>
					<h3>
						<img src={Backend} className='submenu__title__icon' alt='Backend' />
						Backend
					</h3>
					<div className='projects__category__list'>
						<div className='projects__category__list__item'>
							<h4>Piquante</h4>
							<h5>Create an API for a Sauces reviews app</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										So Pekocko is a company that creates spicy sauces whose composition is kept secret. The company
										wants to create a web application in which users can add their favorite sauces and like or dislike
										the sauces added by others. The frontend part of the project is already done, so the goal is to
										create the backend part of the application.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Anoerak_P6_14062021'>
												<img
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P6_14062021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Piquante Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Piquante/Piquante_screenshot1.png')}
													alt='Piquante screenshot 1'
												/>
												<p className='legend'>Login page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Piquante/Piquante_screenshot2.png')}
													alt='Piquante screenshot 2'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Piquante/Piquante_screenshot3.png')}
													alt='Piquante screenshot 3'
												/>
												<p className='legend'>Create form</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Piquante/Piquante_screenshot4.png')}
													alt='Piquante screenshot 4'
												/>
												<p className='legend'>Item created</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>ExpressFood</h4>
							<h5>Create UML diagrams and a MySQL Database for a food delivery app</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										ExpressFood is a young startup that delivers high-quality meals to your home in less than 20 minutes
										with its fleet of bike couriers. In order to compete against Uber Eats, Deliveroo, and others,
										ExpressFood wants to develop a web application that allows users to order their favorite meals
										online. The company has contacted you in order to develop the application. The technical team is
										composed of two developers: you and your mentor. You'll have to develop the backend part of the
										application and your mentor will take care of the frontend part. You'll also have to create the
										database and the UML diagrams for the application.
									</p>
									<div className='bottom'>
										<div className='technologies'>
											<h5>Technologies</h5>
											<ul>
												<li>phpMyAdmin</li>
												<li>MySQL</li>
												<li>FreeForm</li>
											</ul>
										</div>
										<div className='links'>
											<h5>Code on GitHub</h5>
											{/* <a href='https://github.com/Anoerak/Anoerak_P6_13072022'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P6_13072022&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Fisheye Github Repository'
												/>
											</a> */}
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/ExpressFood/desktop/ExpressFood_Screenshot1.webp')}
													alt='ExpressFood screenshot 1'
												/>
												<p className='legend'>Screen1</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/ExpressFood/desktop/ExpressFood_Screenshot2.webp')}
													alt='ExpressFood screenshot 2'
												/>
												<p className='legend'>Screen2</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/ExpressFood/desktop/ExpressFood_Screenshot3.webp')}
													alt='ExpressFood screenshot 3'
												/>
												<p className='legend'>Screen3</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/ExpressFood/desktop/ExpressFood_Screenshot4.webp')}
													alt='ExpressFood screenshot 4'
												/>
												<p className='legend'>Screen4</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/ExpressFood/desktop/ExpressFood_Screenshot5.webp')}
													alt='ExpressFood screenshot 5'
												/>
												<p className='legend'>Screen5</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>BileMo</h4>
							<h5>
								Create an API for a mobile phone provider app, using Symfony and Doctrine ORM, and secure it with OAuth2
							</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										BileMo is a young company that offers a variety of premium mobile phones. You are in charge of the
										development of the API that will be used by the mobile application developers, the frontend part of
										the BileMo website, and the API documentation.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/BileMo'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=BileMo&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='BileMo Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/BileMo/desktop/Bilemo_screenshot1.webp')}
													alt='BileMo screenshot 1'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/BileMo/desktop/Bilemo_screenshot2.webp')}
													alt='BileMo screenshot 2'
												/>
												<p className='legend'>Dashboard</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/BileMo/desktop/Bilemo_screenshot3.webp')}
													alt='BileMo screenshot 3'
												/>
												<p className='legend'>Activity bar chart</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/BileMo/Bilemo_screencast1.gif')}
													alt='SportSee gif 1'
												/>
												<p className='legend'> Navigation</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/BileMo/Bilemo_screencast2.gif')}
													alt='SportSee gif 1'
												/>
												<p className='legend'> Navigation</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/BileMo/Bilemo_screencast3.gif')}
													alt='SportSee gif 1'
												/>
												<p className='legend'> Navigation</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='projects__category' id='fullstack'>
					<h3>
						<img src={Fullstack} className='submenu__title__icon' alt='Fullstack' />
						Fullstack
					</h3>
					<div className='projects__category__list'>
						<div className='projects__category__list__item'>
							<h4>Groupomania</h4>
							<h5>Create a corporate social networking</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										{/* We'll use OpenClassrooms description */}
										Groupomania is a large company that wants to develop a social network for its employees. The company
										has decided to start with an MVP (Minimum Viable Product) of its application. The technical team is
										composed of you (a fullstack developer). You are responsible for the development of both the
										frontend and the backend of the application.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Anoerak_P7_28072021'>
												<img
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P7_28072021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Groupomania Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Groupomania/desktop/Groupomania_screenshot1.webp')}
													alt='Groupomania screenshot 1'
												/>
												<p className='legend'>Login page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Groupomania/desktop/Groupomania_screenshot2.webp')}
													alt='Groupomania screenshot 2'
												/>
												<p className='legend'>Login success</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Groupomania/desktop/Groupomania_screenshot3.webp')}
													alt='Groupomania screenshot 3'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Groupomania/desktop/Groupomania_screenshot4.webp')}
													alt='Groupomania screenshot 4'
												/>
												<p className='legend'>Comments sections</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Groupomania/desktop/Groupomania_screenshot5.webp')}
													alt='Groupomania screenshot 5'
												/>
												<p className='legend'>Comment validated</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Groupomania/Groupomania_screencast.gif')}
													alt='Groupomania screencast'
												/>
												<p className='legend'>Website video</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>My First PHP blog</h4>
							<h5>
								Create a blog with a backend and a frontend, using PHP and MySQL, and secure it with a login and a password
							</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										You are a freelance developer specialized in PHP and MySQL. You are contacted by Barney Stinson, a
										famous blogger who wants to create a new blog. He wants to be able to write articles, and to allow
										his readers to comment on them. No design is required, but the blog should have a backend and a
										frontend. Barney wants to be able to add, edit and delete articles as well as comments. He also
										wants to be able to delete inappropriate comments. Finally, Barney wants his blog to be secured. The
										users of the blog will be able to register and connect to the blog. They must be able to comment on
										the articles written by Barney, but they cannot write articles themselves. The only person who can
										write articles is Barney.
									</p>
									<div className='bottom'>
										<div className='technologies'>
											<h5>Technologies</h5>
											<ul>
												<li>PHP8</li>
												<li>MySQL</li>
												<li>ChatGPT (text)</li>
											</ul>
										</div>
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Barneys_blog'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Barneys_blog&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Barneys_blog Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/MyBlog/desktop/myblog_screenshot1.webp')}
													alt='MyBlog screenshot 1'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/MyBlog/desktop/myblog_screenshot2.webp')}
													alt='MyBlog screenshot 2'
												/>
												<p className='legend'>Footer newsletter</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/MyBlog/desktop/myblog_screenshot3.webp')}
													alt='MyBlog screenshot 3'
												/>
												<p className='legend'>Comment section</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/MyBlog/desktop/myblog_screenshot4.webp')}
													alt='MyBlog screenshot 4'
												/>
												<p className='legend'>Contact form</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/MyBlog/desktop/myblog_screenshot5.webp')}
													alt='MyBlog screenshot 5'
												/>
												<p className='legend'>Database arch.</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/MyBlog/myblog_screencast.gif')}
													alt='MyBlog screencast'
												/>
												<p className='legend'>Screencast</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>Snowtricks</h4>
							<h5>
								Create a website for a snowboard community, using Symfony and Doctrine ORM, and secure it with a login and a
								password
							</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										{/* We are using the context provided by OpenClassroom in this page: https://openclassrooms.com/fr/paths/500/projects/42/assignment*/}
										You are a freelance developer specialized in PHP and Symfony. You are contacted by Jimmy Sweat, a
										famous snowboarder who wants to create a snowboard community website. He wants to share tricks and
										tips with other boarders. He also wants the website to be a place where the community can discuss
										about snowboarding. You are asked to create a prototype of the application. Jimmy Sweat wants the
										technical solution to be based on Symfony. You are free to use any bundle or library to help you
										build the project. The design is not important, so you can use Bootstrap if you want, or develop
										your own CSS.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/SnowTricks'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=SnowTricks&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='SnowTricks Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SnowTricks/desktop/Snowtrick_screenshot1.webp')}
													alt='Snowtrick screenshot 1'
												/>
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SnowTricks/desktop/Snowtrick_screenshot2.webp')}
													alt='Snowtrick screenshot 2'
												/>
												<p className='legend'>Tricks</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SnowTricks/desktop/Snowtrick_screenshot3.webp')}
													alt='Snowtrick screenshot 3'
												/>
												<p className='legend'>Footer</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SnowTricks/desktop/Snowtrick_screenshot4.webp')}
													alt='Snowtrick screenshot 4'
												/>
												<p className='legend'>Carousel</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SnowTricks/desktop/Snowtrick_screenshot5.webp')}
													alt='Snowtrick screenshot 5'
												/>
												<p className='legend'>Comments</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SnowTricks/desktop/Snowtrick_screenshot6.webp')}
													alt='Snowtrick screenshot 6'
												/>
												<p className='legend'>Database relations</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='projects__category' id='others'>
					<h3>
						<img src={Others} className='submenu__title__icon' alt='Others' />
						Others
					</h3>
					<div className='projects__category__list'>
						<div className='projects__category__list__item'>
							<h4>Tutorials</h4>
							<h5>Some tips I hope will be helpful</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										Here are some tutorials I made to help me remember some tips I found useful. I hope they will be
										helpful to you too.
									</p>
									<div className='bottom'>
										<div className='technologies'>
											<h5>Technologies</h5>
											<ul>
												<li>React</li>
												<li>Npm</li>
												<li>Git Package</li>
												<li>Craco</li>
											</ul>
										</div>
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/Tutorials'>
												<img
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Tutorials&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='Tutorials Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Tutorials/desktop/Tutorial_screenshot1.webp')}
													alt='Tutorials screenshot 1'
												/>
												<p className='legend'>Login page</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Tutorials/desktop/Tutorial_screenshot2.webp')}
													alt='Tutorials screenshot 2'
												/>
												<p className='legend'>Login success</p>
											</div>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/Tutorials/desktop/Tutorial_screenshot3.webp')}
													alt='Tutorials screenshot 3'
												/>
												<p className='legend'>Home page</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>Fortune Quote - bash on Windows</h4>
							<h5>Display a random quote in the terminal when you open it, using bash on Windows.</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										Here is a little script I made to display a random quote in the terminal when you open it, using
										bash on Windows. I hope you'll like it.
									</p>
									<div className='bottom'>
										<div className='technologies'>
											<h5>Technologies</h5>
											<ul>
												<li>Bash</li>
												<li>Windows</li>
											</ul>
										</div>
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/fortune_quotes'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=fortune_quotes&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='fortune_quotes Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/FortuneQuotes/desktop/FortuneQuotes_screenshot1.webp')}
													alt='FortuneQuotes screenshot 1'
												/>
												<p className='legend'>Readme</p>
											</div>
											<div>
												<img
													src={require('@Projects/FortuneQuotes/desktop/FortuneQuotes_screenshot2.webp')}
													alt='FortuneQuotes screenshot 2'
												/>
												<p className='legend'>screenshot</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>SebGPT 😅</h4>
							<h5>Host and integrate a GPT AI on my server and portfolio</h5>
							<div className='projects__category__list__item__container'>
								<div className='left__container'>
									<p className='project__description'>
										SebGPT is a GPT AI based on Llama-gpt, deployed on my server and integrated into my portfolio. It is
										able to generate text based on the text you give it.
									</p>
									<div className='bottom'>
										<div className='technologies'>
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
										<div className='links'>
											<h5>Code on GitHub</h5>
											<a href='https://github.com/Anoerak/llama-gpt'>
												<img
													// @ts-ignore
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=llama-gpt&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e&border_color=fd8331bf'
													alt='fortune_quotes Github Repository'
												/>
											</a>
										</div>
									</div>
								</div>
								<div className='right__container'>
									<div className='medias'>
										<Carousel
											showArrows={false}
											showThumbs={false}
											showStatus={false}
											showIndicators={true}
											infiniteLoop={true}
											autoPlay={true}
											interval={10000}
											transitionTime={1000}
											stopOnHover={true}
											emulateTouch={true}
											dynamicHeight={true}
											swipeable={true}
											centerMode={false}
											centerSlidePercentage={100}
											thumbWidth={100}
											selectedItem={0}
											axis={'horizontal'}
											verticalSwipe={'natural'}
											swipeScrollTolerance={5}
											useKeyboardArrows={true}
											statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
											width={'100%'}
											// @ts-ignore
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img
													// @ts-ignore
													src={require('@Projects/SebGPT/desktop/SebGPT_screenshot1.webp')}
													alt='SebGPT screenshot 1'
												/>
												<p className='legend'>Screenshot1</p>
											</div>
											<div>
												<img
													src={require('@Projects/SebGPT/desktop/SebGPT_screenshot2.webp')}
													alt='SebGPT screenshot 2'
												/>
												<p className='legend'>Screenshot2</p>
											</div>
											<div>
												<img
													src={require('@Projects/SebGPT/desktop/SebGPT_screenshot3.webp')}
													alt='SebGPT screenshot 3'
												/>
												<p className='legend'>Screenshot3</p>
											</div>
											<div>
												<img
													src={require('@Projects/SebGPT/desktop/SebGPT_screenshot4.webp')}
													alt='SebGPT screenshot 4'
												/>
												<p className='legend'>Screenshot4</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default Projects;
