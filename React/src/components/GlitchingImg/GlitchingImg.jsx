import React, { useState } from 'react';
import MyCV from '@Logos/cv.png';

import './GlitchingImg.css';

function GlitchingImg(props) {
	// eslint-disable-next-line
	const [img, setImg] = useState(props.img);
	// eslint-disable-next-line
	const [alt, setAlt] = useState(props.alt);
	// eslint-disable-next-line
	const [cv, setCv] = useState(props.cv);
	// eslint-disable-next-line
	const [resumeFile, setResumefile] = useState(props.resumeFile);

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
			{cv && (
				<a className='my__resume' href={resumeFile}>
					<img src={MyCV} alt='My CV' />
				</a>
			)}
		</div>
	);
}

export default GlitchingImg;
