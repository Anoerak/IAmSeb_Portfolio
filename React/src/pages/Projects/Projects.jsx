import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Frontend from '../../assets/logos/frontend.png';
import Backend from '../../assets/logos/back-end.png';
import Fullstack from '../../assets/logos/full-stack.png';
import OhMyFood1 from '../../assets/projects_datas/OhMyFood/OhMyFood_screenshot1.png';
import OhMyFood2 from '../../assets/projects_datas/OhMyFood/OhMyFood_screenshot2.png';
import OhMyFood3 from '../../assets/projects_datas/OhMyFood/OhMyFood_screenshot3.png';
import OhMyFood4 from '../../assets/projects_datas/OhMyFood/OhMyFood_screenshot4.png';
import OhMyFood5 from '../../assets/projects_datas/OhMyFood/OhMyFood_screenshot5.png';
import OhMyFood6 from '../../assets/projects_datas/OhMyFood/OhMyFood_screenshot6.png';
import OhMyFoodGif1 from '../../assets/projects_datas/OhMyFood/OhMyFood_gif1.gif';
import OhMyFoodGif2 from '../../assets/projects_datas/OhMyFood/OhMyFood_gif2.gif';

import './Projects.css';

function Projects() {
	return (
		<section id='projects'>
			<h2>Projects</h2>
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
			</div>
			<main className='projects__container'>
				<div className='projects__category' id='frontend'>
					<h3>Frontend</h3>
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
											<a href='https://github.com/Anoerak/Anoerak_P3_19042021'>
												<img
													align='left'
													src='https://github-readme-stats-git-main-anoerak.vercel.app/api/pin/?username=Anoerak&repo=Anoerak_P3_19042021&show_icons=true&line_height=27&title_color=6aa6f8&text_color=8a919a&icon_color=6aa6f8&bg_color=22272e'
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
											transitionTime={1500}
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
											height={'100%'}
											maxHeight={'30%'}
											className={'carousel'}
										>
											<div>
												<img src={OhMyFood1} alt='OhMyFood screenshot 1' />
												<p className='legend'>Loader</p>
											</div>
											<div>
												<img src={OhMyFood2} alt='OhMyFood screenshot 2' />
												<p className='legend'>Home page</p>
											</div>
											<div>
												<img src={OhMyFood3} alt='OhMyFood screenshot 3' />
												<p className='legend'>Menu page</p>
											</div>
											<div>
												<img src={OhMyFood4} alt='OhMyFood screenshot 4' />
												<p className='legend'>Menu selection</p>
											</div>
											<div>
												<img src={OhMyFood5} alt='OhMyFood screenshot 5' />
												<p className='legend'>Mobile Home page</p>
											</div>
											<div>
												<img src={OhMyFood6} alt='OhMyFood screenshot 6' />
												<p className='legend'>Mobile Menu page</p>
											</div>
											<div>
												<img src={OhMyFoodGif1} alt='OhMyFood gif 1' />
												<p className='legend'>Desktop Navigation</p>
											</div>
											<div>
												<img src={OhMyFoodGif2} alt='OhMyFood gif 2' />
												<p className='legend'>Mobile Navogation</p>
											</div>
										</Carousel>
									</div>
								</div>
							</div>
						</div>
						<div className='projects__category__list__item'>
							<h4>Project 2</h4>
							<p className='project__description'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptatum, quibusdam, quia
								voluptatem voluptas quos asperiores voluptate quas doloribus quidem? Quisquam quod, voluptatum, quibusdam,
								quia voluptatem voluptas quos asperiores voluptate quas doloribus quidem?
							</p>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

export default Projects;
