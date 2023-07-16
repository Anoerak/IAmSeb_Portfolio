import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './IAmSeb.css';

function IAmSeb() {
	return (
		<>
			<div className='box'>
				<p>IamSeb</p>
				<button id='modalBtn'>
					<FontAwesomeIcon icon={faPaperPlane} className='contactme' />
					<span>Contact</span>
				</button>
			</div>
		</>
	);
}

export default IAmSeb;
