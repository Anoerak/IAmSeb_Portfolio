import React from 'react';
import './Card.css';

function Card() {
	return (
		<>
			<div className='card'>
				<div className='cont'>
					<div className='spinner'></div>
					<span className='number'></span>
				</div>
				<div className='card__header'>
					<h2>Random Card</h2>
				</div>
				<div className='card__image'>
					<img src='https://picsum.photos/300/220?random=1' alt='Random' />
				</div>
				<div className='card__footer'>
					<p>Random Footer</p>
				</div>
			</div>
		</>
	);
}

export default Card;
