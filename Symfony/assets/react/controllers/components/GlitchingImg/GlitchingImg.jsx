import React, { useState } from 'react';

import './GlitchingImg.css';

function GlitchingImg(props) {
	const [img, setImg] = useState(props.img);
	const [alt, setAlt] = useState(props.alt);

	console.log(props.img, props.alt);

	return (
		<div id='glitching-img-container'>
			<svg className='filter'>
				<filter id='alphaRed'>
					<feColorMatrix mode='matrix' values='1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0' result='joint' />
				</filter>
				<filter id='alphaGreen'>
					<feColorMatrix mode='matrix' values='0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0' result='joint' />
				</filter>
				<filter id='alphaBlue'>
					<feColorMatrix mode='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0' result='joint' />
				</filter>
				<filter id='alpha'>
					<feColorMatrix type='saturate' values='0' />
				</filter>
			</svg>
			<div className='imgWrap'>
				<img className='red' src={img} alt={alt} />
				<img className='green' src={img} alt={alt} />
				<img className='blue' src={img} alt={alt} />
				<p className='text'>
					<span>Hover me!!</span>
				</p>
			</div>
		</div>
	);
}

export default GlitchingImg;
