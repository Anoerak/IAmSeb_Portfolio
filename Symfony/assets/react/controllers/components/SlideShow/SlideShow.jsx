import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SlideShow = (props) => {
	const [data, setData] = useState([]);
	const [rawDatas, setRawDatas] = useState(Object.values(props));

	useEffect(() => {
		setRawDatas(Object.values(props));
		rawDatas.forEach((value) => {
			if (!value) return;
			// We create an object
			let img = {
				path: value.path,
				alt: value.alt,
				legend: value.legend,
			};
			// We add the img to the data array
			setData((rawDatas) => [...rawDatas, img]);
		});
	}, [props]);

	return (
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
			maxHeight={'30%'}
			className={'carousel'}
		>
			{data.map((item, index) => {
				return (
					<div key={index}>
						<img src={item.path} alt={item.alt} />
						<p className='legend'>{item.legend}</p>
					</div>
				);
			})}
		</Carousel>
	);
};

export default SlideShow;
